const mongoose = require("mongoose");
const User = require("./User");
const Bill = require("./Bill");
const Payment = require("./Payment");
const Feedback = require("./Feedback");

const db = {
  /**
   * Create a new user
   * @param {Object} userData - The data for the new user
   * @returns {Promise<Object>} - The created user
   */
  async createUser(userData) {
    let user = await User.findOne({ email: userData.email });

    if (!user) {
      // Create the user
      user = new User(userData);
      await user.save();

      // Create an initial payment for the user
      const initialPayment = new Payment({
        user: user._id,
        id: null,
        credit: 10,
        amount: 0,
        coupon: null,
        status: true,
        mode: "free",
        gateway: null,
        createdAt: new Date(),
      });

      await initialPayment.save();

      // Associate the payment with the user
      user.payments.push(initialPayment._id);
      // Increment user's credit by the payment credit amount
      user.credit += initialPayment.credit;

      await user.save();
    }

    return user;
  },

  /**
   * Get a user by ID
   * @param {String} userId - The ID of the user
   * @returns {Promise<Object>} - The user object
   */
  async getUserById(userId) {
    return User.findById(userId);
  },

  /**
   * Create a new bill and associate it with a user, deducting credit as needed
   * @param {String} userId - The ID of the user
   * @param {Object} billData - The data for the new bill
   * @returns {Promise<Object>} - The created bill
   */
  async createBill(userId, billData) {
    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    const creditRequired = billData.template_data?.creditRequired || 0;

    if (user.credit < creditRequired) {
      throw new Error("Insufficient credit");
    }

    user.credit -= creditRequired;

    const bill = new Bill({
      user: userId,
      data: billData,
      createdAt: billData.createdAt || new Date(),
    });

    await bill.save();

    user.bills.push(bill._id);
    await user.save();

    return bill;
  },

  /**
   * Create a new payment and associate it with a user
   * @param {String} userId - The ID of the user
   * @param {Object} paymentData - The data for the new payment
   * @returns {Promise<Boolean>} - Returns true if the payment is successfully created, false otherwise
   */
  async createPayment(userId, paymentData) {
    try {
      const payment = new Payment({
        user: userId,
        ...paymentData,
        createdAt: new Date(),
      });

      await payment.save();

      const user = await User.findById(userId);
      if (!user) {
        throw new Error("User not found");
      }

      user.payments.push(payment._id);
      await user.save();

      return true; // Payment successfully created and associated with user
    } catch (error) {
      console.error("Error creating payment:", error);
      return false; // Failed to create payment
    }
  },

  /**
   * Update the payment status based on an external API call result and update user's credit
   * @param {String} transactionId - The transaction ID of the payment
   * @param {Boolean} apiResult - The result of the external API call
   * @returns {Promise<Object>} - The updated payment
   */
  async updatePaymentStatus(transactionId, apiResult) {
    try {
      const payment = await Payment.findOne({ id: transactionId });
      if (!payment) {
        throw new Error("Payment not found");
      }

      if (apiResult) {
        payment.status = true;
        const user = await User.findById(payment.user);
        if (!user) {
          throw new Error("User not found");
        }
        user.credit += payment.credit;
        await user.save();
      }

      await payment.save();
      return payment;
    } catch (error) {
      console.error("Error updating payment status:", error);
      return false;
    }
  },

  /**
   * Create a new feedback entry
   * @param {Object} feedbackData - The data for the new feedback
   * @returns {Promise<Object>} - The created feedback
   */
  async createFeedback(feedbackData) {
    try {
      const feedback = new Feedback({
        email: feedbackData.email,
        message: feedbackData.message,
        platform: feedbackData.platform,
        date: feedbackData.date || new Date(),
      });

      await feedback.save();
      return feedback;
    } catch (error) {
      console.error("Error creating feedback:", error);
      return null;
    }
  },

  /**
   * Remove a user and their associated payments and bills
   * @param {String} userId - The ID of the user to be removed
   * @returns {Promise<Boolean>} - Returns true if the user and related data are successfully removed, false otherwise
   */
  async removeUser(userId) {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
      // Find the user
      const user = await User.findById(userId).session(session);
      if (!user) {
        throw new Error("User not found");
      }

      // Remove all associated bills
      await Bill.deleteMany({ user: userId }).session(session);

      // Remove all associated payments
      await Payment.deleteMany({ user: userId }).session(session);

      // Remove the user
      await User.findByIdAndDelete(userId).session(session);

      await session.commitTransaction();
      session.endSession();

      return true;
    } catch (error) {
      console.error("Error removing user:", error);
      await session.abortTransaction();
      session.endSession();
      return false;
    }
  },
};

module.exports = db;

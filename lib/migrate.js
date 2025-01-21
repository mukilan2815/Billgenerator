// const mongoose = require("mongoose");

// const oldDbUrl =
//   "mongodb+srv://lookpretty:goldenbird@cluster0.xpjzhvi.mongodb.net/billgenerator";
// const newDbUrl =
//   "mongodb+srv://billgenerator:mybillgenpassword@cluster0.fanjaj8.mongodb.net/billgenerator";

// const oldCollectionName = "users";

// // Define schemas for both old and new databases
// const oldUserSchema = new mongoose.Schema({}, { strict: false }); // Schema-less for old DB

// const newUserSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   image: { type: String },
//   credit: { type: Number, default: 0 },
//   bills: [{ type: mongoose.Schema.Types.ObjectId, ref: "Bill" }],
//   payments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Payment" }],
//   role: { type: String, enum: ["ADMIN", "USER"], default: "USER" },
//   createdAt: { type: Date, default: Date.now },
// });
// newUserSchema.index({ email: 1 });

// const billSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   data: Object,
//   createdAt: { type: Date, default: Date.now },
// });

// const paymentSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   id: String,
//   credit: Number,
//   amount: Number,
//   coupon: String,
//   status: Boolean,
//   mode: String,
//   gateway: String,
//   createdAt: { type: Date, default: Date.now },
// });
// paymentSchema.index({ user: 1 });

// function convertToISODate(
//   inputDateString,
//   hours = 0,
//   minutes = 0,
//   seconds = 0,
//   milliseconds = 0
// ) {
//   // Parse the input date string
//   const [day, month, year] = inputDateString.split("/").map(Number);

//   // Create a Date object using Date.UTC to handle the time zone correctly
//   const date = new Date(
//     Date.UTC(year, month - 1, day, hours, minutes, seconds, milliseconds)
//   );

//   // Convert to ISO 8601 string
//   return date.toISOString();
// }

// async function migrateData() {
//   try {
//     // Connect to the old database
//     const oldConnection = await mongoose.createConnection(oldDbUrl, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to the old database");

//     // Create a model for the old collection
//     const OldUser = oldConnection.model(
//       "User",
//       oldUserSchema,
//       oldCollectionName
//     );

//     // Fetch the old data using the model
//     const oldData = await OldUser.find().lean();

//     // Disconnect from the old database
//     await oldConnection.close();
//     console.log("Disconnected from the old database");

//     // Connect to the new database
//     const newConnection = await mongoose.createConnection(newDbUrl, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to the new database");

//     // Use the new connection for models
//     const User = newConnection.model("User", newUserSchema);
//     const Bill = newConnection.model("Bill", billSchema);
//     const Payment = newConnection.model("Payment", paymentSchema);

//     // Ensure indexes are created, catching errors for existing indexes
//     try {
//       await User.createIndexes();
//     } catch (error) {
//       console.log("User index creation error:", error.message);
//     }

//     try {
//       await Bill.createIndexes();
//     } catch (error) {
//       console.log("Bill index creation error:", error.message);
//     }

//     try {
//       await Payment.createIndexes();
//     } catch (error) {
//       console.log("Payment index creation error:", error.message);
//     }

//     // Iterate through each document in the old collection
//     for (const oldDoc of oldData) {
//       // Check if the user already exists in the new database
//       const existingUser = await User.findOne({ email: oldDoc.email });
//       if (existingUser) {
//         console.log(
//           `User with email ${oldDoc.email} already exists. Skipping...`
//         );
//         continue;
//       }

//       // Use the existing createdAt date directly
//       const createdAt = oldDoc.createdAt
//         ? new Date(oldDoc.createdAt)
//         : new Date();

//       // Create and save a new User document
//       const newUser = new User({
//         name: oldDoc.name,
//         email: oldDoc.email,
//         image: oldDoc.image,
//         credit: oldDoc.credit,
//         role: "USER", // default role
//         createdAt: createdAt,
//       });
//       await newUser.save();

//       // Create and save new Bill documents
//       for (const oldBill of oldDoc.bills) {
//         const billCreatedAt = oldBill.createdAt
//           ? new Date(convertToISODate(oldBill.createdAt))
//           : new Date();
//         const newBill = new Bill({
//           user: newUser._id,
//           data: oldBill,
//           createdAt: billCreatedAt,
//         });
//         await newBill.save();
//         newUser.bills.push(newBill._id);
//       }

//       // Create and save new Payment documents
//       for (const oldPayment of oldDoc.payments) {
//         const paymentCreatedAt = oldPayment.createdAt
//           ? new Date(oldPayment.createdAt)
//           : new Date();
//         const newPayment = new Payment({
//           user: newUser._id,
//           id: oldPayment.id || null,
//           credit: oldPayment.credit,
//           amount: oldPayment.amount,
//           coupon: oldPayment.coupon,
//           status: oldPayment.status,
//           mode: oldPayment.mode,
//           gateway: oldPayment.gateway,
//           createdAt: paymentCreatedAt,
//         });
//         await newPayment.save();
//         newUser.payments.push(newPayment._id);
//       }

//       // Save the updated user document with references to bills and payments
//       await newUser.save();
//     }

//     console.log("Migration completed successfully");
//   } catch (error) {
//     console.error("Migration failed:", error);
//   } finally {
//     mongoose.connection.close();
//     process.exit(0);
//   }
// }

// // Run the migration
// migrateData();

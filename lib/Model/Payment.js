const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  id: { type: String, default: null },
  credit: { type: Number, required: true },
  amount: { type: Number, required: true },
  coupon: { type: String, default: null },
  status: { type: Boolean, required: true },
  mode: { type: String, required: true },
  gateway: { type: String, default: null },
  createdAt: { type: Date, default: Date.now },
});

// Create an index on user for fast lookups
paymentSchema.index({ user: 1 });

module.exports =
  mongoose.models.Payment || mongoose.model("Payment", paymentSchema);

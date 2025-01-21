const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String },
  credit: { type: Number, default: 0 },
  bills: [{ type: Schema.Types.ObjectId, ref: "Bill" }],
  payments: [{ type: Schema.Types.ObjectId, ref: "Payment" }],
  role: { type: String, enum: ["ADMIN", "USER"], default: "USER" },
  createdAt: { type: Date, default: Date.now },
});

// Create an index on email for fast lookups
userSchema.index({ email: 1 });

module.exports = mongoose.models.User || mongoose.model("User", userSchema);

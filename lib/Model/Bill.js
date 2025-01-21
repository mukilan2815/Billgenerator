const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  data: { type: Object, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.models.Bill || mongoose.model("Bill", billSchema);

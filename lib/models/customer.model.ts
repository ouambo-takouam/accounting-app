import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    unique: true,
    required: true,
  },
});

const Customer =
  mongoose.models.Customer || mongoose.model("Customer", customerSchema);

export default Customer;

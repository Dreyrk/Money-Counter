import { Schema, model, models } from "mongoose";

const PaymentSchema = new Schema(
  {
    title: { type: String, required: true },
    amount: { type: Number, required: true },
    description: { type: String },
  },
  {
    timestamps: true,
  }
);

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  spending: [PaymentSchema],
});

const Users = models.users || model("users", UserSchema);

export default Users;

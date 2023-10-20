import { Schema, model, models } from "mongoose";

const PaymentSchema = new Schema(
  {
    title: { type: String, required: true },
    amount: { type: Number, required: true },
    description: { type: String },
    date: {
      type: String,
      default: () => {
        const date = new Date();
        const year = date.toLocaleString("default", { year: "numeric" });
        const month = date.toLocaleString("default", {
          month: "2-digit",
        });
        const day = date.toLocaleString("default", { day: "2-digit" });

        return [year, month, day].join("-");
      },
    },
    category: {
      type: String,
      enum: {
        values: [
          "food",
          "drinks",
          "fuel",
          "hobbies",
          "subscriptions",
          "shopping",
          "travel",
          "other",
        ],
        message: "Category not found",
      },
    },
    period: {
      type: String,
      enum: { values: ["daily", "monthly", "yearly"], message: "Wrong period" },
    },
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

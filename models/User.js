import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    bands: { type: [String] },
    instrument: { type: String },
    birthday: { type: Date, required: true },
    albums: [
      {
        title: { type: String },
        year: { type: Number },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const User = mongoose.model("User", UserSchema);

export default User;

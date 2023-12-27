const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowerCase: true,
  },
  password: {
    type: String,
    required: [true, "Please Provide password"],
    minlength: 8,
    select: false,
  },
   loginAttempts: {
    type: Number,
    select: false,
  },
  lockUntil: {
    type: Number,
    select: false,
  },
});

userSchema.pre("save", async function (next) {
  /*Only run this  function if password was actually modified */
  if (!this.isModified("password")) return next();

  /*Hash the password with cost of 12 */
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre(/^find/, function (next) {
  if (this.find({ active: { $ne: false } }));
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

module.exports = mongoose.model("User", userSchema);

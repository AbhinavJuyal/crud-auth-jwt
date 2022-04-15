const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minLength: [8, "Password must be at least 8 characters"],
    },
    role: {
      type: String,
      required: [true, "Please add a role"],
    },
    active: {
      type: Boolean,
      required: [true, "Please add a status"],
    },
    hash: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  const user = this;

  // hash password if it's new or modified.
  if (!user.isModified()) return next();

  // generate salt
  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) throw new Error(err);
    // hash the password with new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) throw new Error(err);
      // saving hash as the password
      user.password = hash;
      next();
    });
  });
});

//compare password
userSchema.statics.comparePassword = function (
  candidatePassword,
  dbPassword,
  cb
) {
  // console.log(this);
  console.log("checking password...");
  bcrypt.compare(candidatePassword, dbPassword, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model("User", userSchema);

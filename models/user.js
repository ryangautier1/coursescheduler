const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    registered: [
      {
          type: Schema.Types.ObjectId,
          ref: "Course"
      }
    ],
    username: {
      type: String,
      unique: true
    },
    password: {
        type: String,
        required: true,
        validate: [({ length }) => length >= 6, "Password should be longer."]
    },
    userType: {
        type: String,
        default: "student"
    },
    amountOwed : {
      type: Number
    },
    planners : [
        {
            type: Schema.Types.ObjectId,
            ref: "Planner"
        }
    ]
});

userSchema.pre("save", async function save(next) {  
    // only hash the password if it has been modified (or is new)
    if (!this.isModified("password")) {
        return next();
    }
    try {
        // generate a salt
        const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
        // hash the password along with the new salt
        this.password = await bcrypt.hash(this.password, salt);
        return next();
    } catch (err) {
        return next(err);
    }
});

userSchema.methods.validatePassword = async function validatePassword(data) {
    return bcrypt.compare(data, this.password); 
};

const User = mongoose.model("User", userSchema);

module.exports = User;
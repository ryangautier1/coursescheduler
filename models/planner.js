const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plannerSchema = new Schema({
  title: { type: String, required: true },
  student:
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course"
    }
  ]
});

const Planner = mongoose.model("Planner", plannerSchema);

module.exports = Planner;
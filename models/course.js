const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  title: { type: String, required: true },
  department: { type: String, required: true },
  courseNumber: { type: String, required: true },
  term: { type: String, required: true },
  classCode: { type: String, required: true },
  level: { type: String, required: true },
  professor: {
    type: Schema.Types.ObjectId,
    ref: "Professor"
  },
  waitlist: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  capacity: { type: Number, required: true },
  numberRegistered: { type: Number, required: true },
  finalDate: { type: Date, required: true },
  status: { type: String, required: true },
  days: [
    {
      type: String,
      required: true
    }
  ],
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  duration: { type: Number, required: true },
  ratings: [
    { type: Number }
  ],
  usersRated: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  textbook: { type: String }
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
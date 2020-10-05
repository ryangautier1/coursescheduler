const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const professorSchema = new Schema({
  name: { type: String, required: true },
  department: { type: String, required: true },
  school: { type: String, required: true },
  office: { type: String, required: true },
  email: { type: String, required: true },
  courseLoad: { type: String, required: true },
  grading: { type: String, required: true },
  projects: { type: String, required: true },
  teachingPreference: { type: String, required: true },
  organization: { type: String, required: true },
  website: { type: String, required: true },
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course"
    }
  ],
});

const Professor = mongoose.model("Professor", professorSchema);

module.exports = Professor;
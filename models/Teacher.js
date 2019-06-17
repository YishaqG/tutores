var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var TeacherSchema = new Schema({
  subject: [{ type: Schema.Types.ObjectId, ref: 'Subject' }],
  tutored: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
  cube: {number: Number, building: {name: String, number: Number}},
  summary: String
});

module.exports = mongoose.model('Teacher', TeacherSchema );

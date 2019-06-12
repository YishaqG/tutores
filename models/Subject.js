var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var SubjectSchema = new Schema({
  enrollment: Schema.Types.ObjectId,
  name: {type: String, required: true},
  period: {type: Date, default: Date.now(), required: true}
});

module.exports = mongoose.model('Subject', SubjectSchema );

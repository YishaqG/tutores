var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
  subject: [{
              materia: { type: Schema.Types.ObjectId, ref: 'Subject' }, grade: { type: Number, required: true }
            }],
  tutor: { type: Schema.Types.ObjectId, ref: 'Teacher' }
});

module.exports = mongoose.model('Student', StudentSchema );

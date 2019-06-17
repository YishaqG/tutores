var mongoose = require('mongoose');
var passportlocalMongoose = require('passport-local-mongoose');

//Define a schema
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {type: String, unique: true, require: true},
  name: {type: String, required: true},
  email: String,
  startDate: { type: Date, default: Date.now() },
  _student: {type: Schema.Types.ObjectId, ref: 'Student'},
  _teacher: {type: Schema.Types.ObjectId, ref: 'Teacher'},
  _admin: {type: Boolean, default: false}
});


UserSchema.plugin( passportlocalMongoose );

module.exports = mongoose.model('User', UserSchema );

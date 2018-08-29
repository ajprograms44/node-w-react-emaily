const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
  googleId: String
});
//Defining the scheme of the user

mongoose.model('users', userSchema);
//creating a model instance with mongoose


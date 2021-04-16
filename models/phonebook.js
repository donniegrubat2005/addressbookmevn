const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const phonebookSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  address: { type: String, required: true },
 
}, {
  timestamps: true,
});

const Phonebook = mongoose.model('Phonebook', phonebookSchema);

module.exports = Phonebook;
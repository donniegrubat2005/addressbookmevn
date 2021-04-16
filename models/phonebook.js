const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const phonebookSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  address: { type: String, required: true },
 
}, {
  timestamps: true,
});

phonebookSchema.method("toJSON", function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const Phonebook = mongoose.model('Phonebook', phonebookSchema);

module.exports = Phonebook;
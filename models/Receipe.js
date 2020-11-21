const { Schema, model } = require('mongoose');

const schema = new Schema({
  nameReceipt: { type: String, required: true },
  nameIngredient: { type: String, required: true },
  ingredientType: { type: String },
  numberIngredient: { type: String },
  counterPortions: { type: String },
});

module.exports = model('Receipe', schema);

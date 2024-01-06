const mongoose = require("mongoose");
const { Schema } = mongoose;

const placeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    }
  }
);

const Place  = mongoose.model("Place", placeSchema);

module.exports = {
  Place,
  placeSchema,
};
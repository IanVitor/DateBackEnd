const { Place: PlaceModel } = require("../models/Place");

const placesController = {
  getAll: async (req, res) => {
    try {
      const places = await PlacesModel.find();
      let newPlaces = [];

      for(let i=0; i<places.length; i++){
        newPlaces[i] = {
          "_id": places[i]._id
        }
      }

      res.json(newPlaces);
      
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = placesController;
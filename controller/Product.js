const {
    TopTrending,
    filterByWebName,
    findCourseById,
} = require("../models/Product");

exports.TopTrending = async (req, res) => {
    try {
      let response = await TopTrending();
      return res.status(200).json({
        response,
      });
    } catch (err) {
      res.status(400).json({
        message: "load fail",
      });
  
      console.log(err);
    }
};

exports.filterByWebName = async (req, res) => {
    try {
      let response = await filterByWebName(req.params.id);
      return res.status(200).json({
        response,
      });
    } catch (err) {
      res.status(400).json({
        message: "load fail",
      });
      console.log(err);
    }
};

exports.findById = async (req, res) => {
    try {
      let response = await findCourseById(req.params.id);
      return res.status(200).json({
        response,
      });
    } catch (err) {
      res.status(400).json({
        message: "load fail",
      });
      console.log(err);
    }
};
const {
    TopTrending,
    filterByWebName,
    findProductById,
    Products
} = require("../models/Product");

exports.searchName = async(req,res) =>{
  const query =req.params.query;
  //query.replace(/-/g,' ');
  //const query='macbook pro i5'
  Products.find( {$text: { $search: query }},
    { score: { $meta: "textScore" } }, (findErr, findRes) => {
    if (findErr) {
    //log error here
    res.status(200).send({
    message: 'Failed: to search via index',
    success: true,
    result: findErr
    });
    }
    else {
    res.send(findRes);
    }
  }).sort({ score: { $meta: "textScore" } });
}

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
      let response = await findProductById(req.params.id);
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
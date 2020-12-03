const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DATA = "DataProducts";

const products = new Schema(
    {
        link: String,
        ngay_update: String,
        Gia_HT: {ThoiGian: String,GiaTien:String},
        Hang_SX: String,
        Img: [String],
        Info:[{
        Info_name:String,
        Info_text:String
        }],
        Ten:String,
        Web:String
    },
    { collection: DATA }
);

const listProducts = mongoose.model(DATA, products)

const topTrending = async () => {
    const skip = 0;
    const limit = 8;
    return await listProducts.find().skip(skip).limit(limit);
}

const filterByWebName = async (Web) => {
    const filter = {
      Web: Web,
    };
    return await listProducts.find(filter);
  };

const findById = async (id) => {
    return await list.findById(id);
  };

module.exports= {
    listProducts: listProducts,
    filterByWebName: filterByWebName,
    findProductById: findById,
    TopTrending: topTrending
};
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SchemaTypes = mongoose.Schema.Types;
//const DATA = "DataProducts";
const DATA = "Products";
//var textSearch = require('mongoose-text-search');

const products = new Schema(
    {
        // link: String,
        // ngay_update: String,
        // Gia_HT: {Time: String,Price:String},
        // Hang_SX: String,
        // Img: [String],
        // Info:{
        // InfoName:[String],
        // InfoText:[String]
        // },
        // Ten:String,
        // Web:String,
        catid: Number,
        itemid: Number,
        shopid: Number,
        atributes: {value: {type:String}, name: String},
        images: [String],
        description: String,
        currency: String,
        image: String,
        name: String,
        sold: Number,
        stock: Number,
        cmt_count: Number,
        liked_count: Number,
        rating_star: Number,
        review_price: {price: {type:Number}, DayUpdate: Date},

    },
    { collection: DATA }
);
//products.index({Ten:'text',Hang_SX:'text'},{weights:{Ten:4}});
products.index({name:'text'});

Products=mongoose.model('products',products)
//products.plugin(textSearch);

const listProducts = mongoose.model(DATA, products)

const topTrending = async () => {
    const skip = 0;
    const limit = 8;
    return await listProducts.find().skip(skip).limit(limit);
}



module.exports= {
    TopTrending: topTrending,
    Products:Products
};
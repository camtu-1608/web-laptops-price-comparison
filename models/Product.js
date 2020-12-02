const mongoose=require('mongoose');

const productSchema=mongoose.Schema({
    link: String,
    ngay_update: String,
    GiaGoc: String,
    Gia_HT: {ThoiGian: String,GiaTien:String},
    Hang_SX: String,
    Img: Array,
    Info:[{
       Info_name:String,
       Info_text:String
    }],
    Ten:String
});

module.exports=mongoose.model('products',productSchema);
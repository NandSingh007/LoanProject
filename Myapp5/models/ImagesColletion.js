const mongoose = require("mongoose");
// Define the Mongoose schema
const ImgCollection = new mongoose.Schema({
  Sliderimages: [
    {
      SliderName: {
        type: String
      },
      SliderImg: {
        type: Buffer
      }
    }
  ]
});
const NoticeCollection = new mongoose.Schema({
  images: [
    {
      NoticeName: {
        type: String
      },
      NoticeImg: {
        type: Buffer
      }
    }
  ]
});
// Create the Mongoose model
const ImgCollectiondata = mongoose.model("ImgCollectiondata", ImgCollection);
const NoticeCollectiondata = mongoose.model(
  "NoticeCollectionImg",
  NoticeCollection
);
module.exports = { ImgCollectiondata, NoticeCollectiondata };

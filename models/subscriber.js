const mongoose = require("mongoose"),
      subscriberSchema = mongoose.Schema({
          name: String,
          email: String,
          zipCode : Number,
      });
module.export = mongoose.model("Subscriber", subscriberSchema);
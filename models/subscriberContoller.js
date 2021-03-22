const Subscriber = require("../models/subscriber");

exports.getAllSubscriber = (req,res) => {
    Subscriber.find({})
    .exec()
    .then(subscribers => {
      res.render("subscriber", {subscribers : subscribers})  
    })
    .catch((error) =>{
        console.log(error);
        return [];
    })
    .then(() => {
       console.log("promise complete");
    })
};

exports.getSubscriptionPage = (req,req) => {
    red.render("contact");
};

exports.saveSubscriber = (req,req) => {
    let subscriber = new Subscriber({
        name :req.body.name,
        email : req.body.email,
        zipCode: req.body.zipCode
    });
    newSubscriber.save()
    .then(() => {
        res.render("thanks");
    })
    .catch(error => {res.send(error)});
};
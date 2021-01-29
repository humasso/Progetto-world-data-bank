var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;

router.get('/', function(req, res, next) {
  const uri = 'mongodb+srv://Humasso:H1humass@mongodb.ax2db.mongodb.net/MongoDB?retryWrites=true&w=majority'
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("World_Data_Bank").collection("SDG7 (Affordable and clean energy)"); 
        collection.find().limit(10).toArray((err, result) => {
            if (err) console.log(err.message);
            else res.send(result);
            client.close();
        });

    });
});

module.exports = router;
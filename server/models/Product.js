const mongoose = require('mongoose');

const { Schema } = mongoose;

function getbooks(){
    document.getElementById("output").innerHTML="";
    fetch("http://openlibrary.org/search.json?q="+document.getElementById("input").value)
    .then(a => a.json())
    .then(response =>{
        for(var i=0; i<10; i++){
            document.getElementById("output").innerHTML+=
            "<h2>"+response.docs[i].title+"</h2>"
                +response.docs[i].author_name[0]+response.docs[i].first_publish_year+
                response.docs[i].first_sentence.0
                "<br><img src='http://covers.openlibrary.org/b/isbn/"+response.docs[i].isbn[0]+"-L.jpg'><br>";
        }
    });

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true
    },
    firstSentence: {
        type: String
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 1
    },
    quantity: {
        type: Number,
        min: 1,
    },
    year: {
        type: Number,
        required: true,
    }
    
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
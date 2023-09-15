const mongoose = require('mongoose');
 
const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        minlength:[10,"setup must have at least 10 characters"]
    },
    punchline: {
        type: String,

        minlength:[3,"punchline must have at least 3 characters"]
    }
    

},
{ timestamps:true}


);
 
const Jokes = mongoose.model('Jokes', JokesSchema);
 
module.exports = Jokes;

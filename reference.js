var mongoose = require("mongoose");
var Post = require("./models/post");
var User = require("./models/user");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/dataObjRef1", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Connected to Data Object References 1 DB!");
}).catch(err => {
    console.log("Error:", err.message);
});

// const postSchema = new mongoose.Schema({
//     title: String,
//     content: String
// });

// const Post = mongoose.model("Post", postSchema);

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     posts: [
//         {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Post"
//         }
//     ]
// });

// const User = mongoose.model("User", userSchema);

var newPost = new Post({
    title: "Keep it up!",
    content: "Set up a healthy rewards system!"
})


newPost.save((err, post) => {
    // console.log(post);
    User.findOne({name: "Sunny B"}, (err, foundUser)=>{
        if (err) {
            console.log(err)
        }
        else {
            foundUser.posts.push(post);
            foundUser.save((err, data)=> {
                if (err) {
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        }
    });
    }
);
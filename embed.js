var mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/dataassocs", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Connected to Data Associations DB!");
}).catch(err => {
    console.log("Error:", err.message);
});

const postSchema = new mongoose.Schema({
    title: String,
    content: String
});

const post = mongoose.model("post", postSchema);

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    posts: [postSchema]
});

const user = mongoose.model("users", userSchema);

// var newUser = new user({
//     name: "Shreshta Balachandar",
//     email: "sb11@gmail.com"
// });

// newUser.posts.push({
//     title: "My pledge",
//     content: "I will pursue self-improvement relentlessly and will not allow fatigue or anything else to come in my way."
// });

user.findOne({name: "Shreshta Balachandar"}, (err, user) => {
    if (err) {
        console.log(err);
    } else {
        user.posts.push({
            title: "Attempt",
            content: "Did I fix it?"
        });
        user.save((err, user) => {
            if (err) {
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});

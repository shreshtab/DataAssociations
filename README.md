# DataAssociations
 Unit 32 of Colt Steele's Web Dev Bootcamp

# Embedding Data
*   Establishing a one:many relationship between users and posts
*   Set up with mongoose and connect with local DB

# Embedding Data - Exercises
*   Users with email and name, both string
*   mongoose.model and all per previous projects
*   Posts with title and content, both strings
*   Create dummy user and dummy post and save to DB with callback
*   Embed the posts attribute into the user, and it becomes an array named after the schema
*   Need to define the user schema after the post schema, since the post schema needs to be defined first
*   To add to user, newUser.posts.push({})
*   Save through: newUser.save function with callback
*   To find user, use User.findOne({}, (err, user) => {} callback)
*   Inside callback, user.posts.push({}). Then add user.save with callback...

# Object References
*   Copy data over and change DB. Keep schemas and models
*   Instead of storing posts inside the user, post IDs will be stored instead of embedding the entire post
*   Instead of the post schema, add an object inside []. With key-value 
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post"
    }
*   Create user model and create dummy user
*   Create a dummy post and console.log created post to get the ID
*   Post.create another post, then in the callback, findOne to get the user
*   Then have another callback to do founduser.posts.push(post - comes from first callback)
*   The do a founduser.save with callback to print out the data
*   Test with another post
*   To retrieve posts of a user, findOne and then pass parameter to find without callback. After ({} with no callback).populate("posts").exec(callback). If success, console.log the user
*   Embed vs Refrence depends on use case
*   Note: If only one post is there, the entire post will show
*   Note 2: .populate.exec is not permanent
*   Note 3: Earlier assumption over using a var rather than a Post.create has been proven false. Both methods seem to work. Symptoms of only 1 post being there!

# Module.Exports
*   Introduce module.exports
*   Move our models into separate files - Helps to shorten, clean up and make the app modular, especially if it is looking to be re-used in another app
*   Move the schema and model to the new files and require Mongoose
*   Add the bottom of the new file, module.exports = Post (or can remove the var and do direct)
*   Inside references.js, to require the mode file write var Post = require("./models/post"), since ./ references the current directory
*   Do the same thing for the user code
*   Can also send multiple objects with module.exports
*   Test with the existing code and push a post into a user. See what prints

const express = require("express");
const app = express();

const cors = require("cors");
//!require database models/schema
const User = require("./models/users");
const Post = require("./models/posts")

//!middlewars
app.use(express.json());
//!to overcome bodyParse
app.use(express.urlencoded({ extended: false }));
//!crbss origin resource sharing
app.use(cors());

const mongoose = require("mongoose");
//!port number
const PORT = 4001;
//!to clear warnings
mongoose.set("strictQuery", false);

//!database url
const dburl = "mongodb://localhost:27017/foodie";

//!connecting to data base and login page usin 
mongoose.connect(dburl).then(() => {
    console.log("connected to database");
});
app.post("/login", async(req, res) => {
    User.findOne({ email: req.body.email }, (err, userData) => {
        if (userData) {
            if (req.body.password == userData.password) {
                res.send({ message: "Login successFull" });
            } else {
                res.send({ message: "invaild credentails !.." })
            }
        } else {
            res.send({ message: "no account seems to be matching with your email address" })
        }
    });
});
//!connecting to data base to store details in order to register

app.post("/signup", async(req, res) => {
    User.findOne({ email: req.body.email }, (err, userData) => {
        if (userData) {
            res.send({
                message: "Seems like you already have an account with this email",
            });
        } else {
            const data = new User({
                username: req.body.username,
                phoneNumber: req.body.phoneNumber,
                email: req.body.email,
                password: req.body.password,
            });
            data.save(() => {
                if (err) {
                    res.send(err);
                } else {
                    res.send({ message: "User already registered" });
                }
            });
        }
    });
});

//!connecting to data base to store details of posts that we add


app.post('/addPosts', async(req, res) => {
        let postData = new Post({
            author: req.body.author,
            title: req.body.title,
            summary: req.body.summary,
            image: req.body.image,
            location: req.body.location
        })
        try {
            await postData.save()
            res.send({ message: "Post added SuccessFully" })
        } catch (err) {
            res.send({ message: "Failed to add post" })
        }

    })
    // !to get content of all post and send it to front end
app.get('/foods', async(req, res) => {
    try {
        const posts = await Post.find()
        res.send(posts)
    } catch (err) {
        console.log(err);
    }
})

app.get('/foods/:id', async(req, res) => {
    const { id } = req.params
    try {
        const singlePost = await Post.findById(id)
        res.send(singlePost)
    } catch (err) {
        res.send(err)

    }
})
app.get('/users', async(req, res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch (err) {

    }
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
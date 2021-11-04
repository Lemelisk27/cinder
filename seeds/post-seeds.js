const {Post} = require("../models")

const postData = [
    {
        UserId: 1,
        comment: "Wow, this is a comment!",
        post_date: "2021-10-31"
    },
    {
        UserId: 1,
        comment: "A second comment!",
        post_date: "2021-10-31"
    },
    {
        UserId: 2,
        comment: "Wow, this is a comment!",
        post_date: "2021-10-31"
    },
    {
        UserId: 2,
        comment: "A second comment!",
        post_date: "2021-10-31"
    },
    {
        UserId: 3,
        comment: "Wow, this is a comment!",
        post_date: "2021-10-31"
    },
    {
        UserId: 3,
        comment: "A second comment!",
        post_date: "2021-10-31"
    },
    {
        UserId: 4,
        comment: "Wow, this is a comment!",
        post_date: "2021-10-31"
    },
    {
        UserId: 4,
        comment: "A second comment!",
        post_date: "2021-10-31"
    },
    {
        UserId: 5,
        comment: "Wow, this is a comment!",
        post_date: "2021-10-31"
    },
    {
        UserId: 5,
        comment: "A second comment!",
        post_date: "2021-10-31"
    },
    {
        UserId: 6,
        comment: "Wow, this is a comment!",
        post_date: "2021-10-31"
    },
    {
        UserId: 6,
        comment: "A second comment!",
        post_date: "2021-10-31"
    },
    {
        UserId: 7,
        comment: "Wow, this is a comment!",
        post_date: "2021-10-31"
    },
    {
        UserId: 7,
        comment: "A second comment!",
        post_date: "2021-10-31"
    },
    {
        UserId: 8,
        comment: "Wow, this is a comment!",
        post_date: "2021-10-31"
    },
    {
        UserId: 8,
        comment: "A second comment!",
        post_date: "2021-10-31"
    }
]

const seedPosts = () => Post.bulkCreate(postData)

module.exports = seedPosts
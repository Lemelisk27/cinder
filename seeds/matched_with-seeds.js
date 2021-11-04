const {Matched_With} = require("../models")

const matchedWithData = [
    {
        user_1: 1,
        user_2: 4
    },
    {
        user_1: 1,
        user_2: 6
    },
    {
        user_1: 2,
        user_2: 3
    },
    {
        user_1: 2,
        user_2: 7
    },
    {
        user_1: 3,
        user_2: 2
    },
    {
        user_1: 3,
        user_2: 4
    },
    {
        user_1: 3,
        user_2: 6
    },
    {
        user_1: 3,
        user_2: 7
    },
    {
        user_1: 4,
        user_2: 1
    },
    {
        user_1: 4,
        user_2: 3
    },
    {
        user_1: 5,
        user_2: 6
    },
    {
        user_1: 5,
        user_2: 8
    },
    {
        user_1: 6,
        user_2: 1
    },
    {
        user_1: 6,
        user_2: 3
    },
    {
        user_1: 6,
        user_2: 5
    },
    {
        user_1: 6,
        user_2: 8
    },
    {
        user_1: 7,
        user_2: 2
    },
    {
        user_1: 7,
        user_2: 3
    },
    {
        user_1: 8,
        user_2: 5
    },
    {
        user_1: 8,
        user_2: 6
    },
]

const seedMatchedWith = () => Matched_With.bulkCreate(matchedWithData)

module.exports = seedMatchedWith
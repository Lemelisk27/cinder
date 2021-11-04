const {Second_Match} = require("../models")

const secondMatchData = [
    {
        user_1: 1,
        user_2: 6
    },
    {
        user_1: 2,
        user_2: 7
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
        user_2: 3
    },
    {
        user_1: 5,
        user_2: 8
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
        user_2: 3
    },
    {
        user_1: 8,
        user_2: 6
    },
]

const seedSecondMatches = () => Second_Match.bulkCreate(secondMatchData)

module.exports = seedSecondMatches
const {First_Match} = require("../models")

const firstMatchData = [
    {
        user_1: 1,
        user_2: 4
    },
    {
        user_1: 2,
        user_2: 3
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
        user_1: 4,
        user_2: 1
    },
    {
        user_1: 5,
        user_2: 6
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
        user_1: 7,
        user_2: 2
    },
    {
        user_1: 8,
        user_2: 5
    }
]

const seedFirstMatches = () => First_Match.bulkCreate(firstMatchData)

module.exports = seedFirstMatches
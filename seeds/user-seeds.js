const {User, Survey} = require("../models")


//TODO: (CH) Add surveyData to userData
const userData = [
    {
        first_name: "Viriato",
        last_name: "Davidson",
        username: "Viriato123",
        email: "Viriato@Davidson.com",
        password: "password",
        has_survey: true
    },
    {
        first_name: "Aritz",
        last_name: "Toller",
        username: "Aritz123",
        email: "Aritz@Toller.com",
        password: "password",
        has_survey: true
    },
    {
        first_name: "Mor",
        last_name: "Pinto",
        username: "Mor123",
        email: "Mor@Pinto.com",
        password: "password",
        has_survey: true
    },
    {
        first_name: "Eugeneia",
        last_name: "Lind",
        username: "Eugeneia123",
        email: "Eugeneia@Lind.com",
        password: "password",
        has_survey: true
    },
    {
        first_name: "Silvia",
        last_name: "Fausti",
        username: "Silvia123",
        email: "Silvia@Fausti.com",
        password: "password",
        has_survey: true
    },
    {
        first_name: "Morwenna",
        last_name: "Simmon",
        username: "Morwenna123",
        email: "Morwenna@Simmon.com",
        password: "password",
        has_survey: true
    },
    {
        first_name: "Stephanos",
        last_name: "Simmon",
        username: "Stephanos123",
        email: "Stephanos@Jaso.com",
        password: "password",
        has_survey: true
    },
    {
        first_name: "Armelle",
        last_name: "Temitope",
        username: "Armelle123",
        email: "Armelle@Temitope.com",
        password: "password",
        has_survey: true
    }
]

const seedUsers = () => User.bulkCreate(userData,{individualHooks:true})

module.exports = seedUsers
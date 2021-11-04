const seedUsers = require("./user-seeds")
const seedPosts = require("./post-seeds")
const seedFirstMatches = require("./first_match-seeds")
const seedSecondMatches = require("./second_match-seeds")
const seedSurvey = require("./survey-seeds")
const seedMatchedWith = require("./matched_with-seeds")
const seedImage = require ("./image-seeds")

const sequelize = require("../config/connection")

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log('\n-----DATABASE SYNCED-----\n')
    await seedUsers()
    console.log('\n-----USERS SEEDED-----')
    await seedPosts()
    console.log('\n-----POSTS SEEDED-----')
    await seedFirstMatches()
    console.log('\n-----FIRST MATCHES SEEDED-----')
    await seedSecondMatches()
    console.log('\n-----SECOND MATCHES SEEDED-----')
    await seedMatchedWith()
    console.log('\n-----MATCHED WITH SEEDED-----')
    await seedSurvey()
    console.log('\n-----SURVEYS SEEDED-----')
    await seedImage()
    console.log('\n-----IMAGES SEEDED-----')
    process.exit(0)
}

seedAll()
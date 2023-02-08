// seed.js will be run by the script `npm run seed`

// this will seed our database with a bunch of pets

// we can modify this later after building out our API a little bit

const mongoose = require('mongoose')
const Pet = require('./pet')
const db = require('../../config/db')

const startPets = [
    { name: 'Sparky', type: 'dog', age: 2, adoptable: true},
    { name: 'Leroy', type: 'dog', age: 10, adoptable: true},
    { name: 'Biscuits', type: 'cat', age: 3, adoptable: true},
    { name: 'Hulk Hogan', type: 'hamster', age: 1, adoptable: true}
]

// first we connect to the db

// then remove all pets
// then add the start pets
// and always close the connection, whether it's a success or failure

mongoose.connect(db, {
    useNewUrlParser: true
})
    .then(() => {
        Pet.deleteMany()
            .then(deletedPets => {
                console.log('deleted pets: ', deletedPets)
                // now we add our pets to the db
                Pet.create(startPets)
                    .then(newPets => {
                        console.log('new pets: ', newPets)
                        mongoose.connection.close()
                    })
                    .catch(error => {
                        console.log(error)
                        mongoose.connection.close()
                    })
            })
            .catch(error => {
                console.log(error)
                mongoose.connection.close()
            })
    })
    .catch(error => {
        console.log(error)
        mongoose.connection.close()
    })
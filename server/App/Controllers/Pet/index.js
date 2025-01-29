const {adoptPet, cancelAdoption} = require('./adoptionController')
const { addPet } = require('./petController')

module.exports = {
    adoptPet,
    cancelAdoption,
    addPet,
}
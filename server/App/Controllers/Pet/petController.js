const Joi = require("joi");
const { resSender } = require("../../Helpers");
const validator = require('../../Helpers/validationSchema');
const { Pet } = require("../../Models");
const addPet = async (req, res) => {
    try {
        const {petName, petType, petAge, petSize, petGender, petBreed, petDescription, petImage, petAdoptionFee} = req.body;

        const schema = Joi.object({
            petName: validator.petName,
            petType: validator.petType,
            petAge: validator.petAge,
            petSize: validator.petSize,
            petGender: validator.petGender,
            petBreed: validator.strings,
            petDescription: validator.strings,
            petImage: validator.strings,
            petAdoptionFee: validator.strings,
        });

        const { error } = schema.validate(req.body);
        if(error) return resSender(res, 400, error.details[0].message, 'fail');

        const pet = await Pet.create({
            petName,
            petType,
            petAge,
            petSize,
            petGender,
            petBreed,
            petDescription,
            petImage,
            petAdoptionFee,
        });
        await pet.save();

        return resSender(res, 201, 'Pet added successfully', 'success', pet);
    } catch (error) {
        console.log(error);
        return resSender(res, 500, error.message, 'error');
    }
}

module.exports = {
    addPet
}
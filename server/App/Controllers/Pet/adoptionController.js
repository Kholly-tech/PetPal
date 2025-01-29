const Joi = require("joi");
const { resSender } = require("../../Helpers");
const { Adoption, Pet } = require("../../Models");
const validator = require("../../Helpers/validationSchema");

const adoptPet = async (req, res) => {
    try {
        const userId = req.user._id;
        const {
            fullName,
            address,
            phone,
            homeOwnership,
            householdMembers,
            currentPets,
            petExperience,
            primaryCaregiver,
            hoursAlone,
            exercise,
            vetContact,
            petType,
            preferredAge,
            sizePreference,
            petGender,
            energyLevel,
            specificRequirements,
            travelPlan,
            vetCosts,
            training,
            yardFenced,
            surrenderReason,
            petId,
        } = req.body

        const schema = Joi.object({
            fullName: validator.fullName,
            address: validator.strings,
            phone: validator.phoneNumber,
            homeOwnership: validator.strings,
            householdMembers: validator.strings,
            currentPets: validator.strings,
            petExperience: validator.strings,
            primaryCaregiver: validator.strings,
            hoursAlone: validator.strings,
            exercise: validator.strings,
            vetContact: validator.strings,
            petType: validator.petType,
            preferredAge: validator.petAge,
            sizePreference: validator.petSize,
            petGender: validator.petGender.allow('any'),
            energyLevel: validator.petEnergyyLevel,
            specificRequirements: validator.strings,
            travelPlan: validator.strings,
            vetCosts: validator.strings,
            training: validator.strings,
            yardFenced: validator.strings,
            surrenderReason: validator.strings,
            petId: validator.optionalId,
        });

        const {error} = schema.validate(req.body);
        if(error) return resSender(res, 400, error.details[0].message, 'error');

        const pet = await Pet.findById(petId);
        if(pet && pet.petAdoptionStatus === 'adopted') return resSender(res, 403, 'Pet has been Adopted', 'fail');

        const newAdoption = new Adoption({
            userId,
            fullName,
            address,
            phone,
            homeOwnership,
            householdMembers,
            currentPets,
            petExperience,
            primaryCaregiver,
            hoursAlone,
            exercise,
            vetContact,
            petType,
            preferredAge,
            sizePreference,
            petGender,
            energyLevel,
            specificRequirements,
            travelPlan,
            vetCosts,
            training,
            yardFenced,
            surrenderReason,
            petId,
        });

        await newAdoption.save();

        return resSender(res, 200, 'Application saved', 'success', newAdoption);

    } catch (error) {
        console.log(error);
        return resSender(res, 500, error.message, 'error');
    }
};

const cancelAdoption = async (req, res) => {
    try {
        const userId = req.user._id;
        const {adoptionId} = req.params;

        const adoption = await Adoption.findOne({userId, _id: adoptionId});
        if(!adoption || adoption.status === 'cancelled') return resSender(res, 404, 'Adoption not found', 'fail');

        await Adoption.findByIdAndUpdate(adoptionId, {status: 'cancelled'});
        return resSender(res, 200, 'Adoption cancelled', 'success');

    } catch (error) {
        console.log(error);
        return resSender(res, 500, error.message, 'error');
    }
}

module.exports = {
    adoptPet,
    cancelAdoption
}
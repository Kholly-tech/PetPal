const { model, Schema } = require("mongoose");

const adoptionSchema = Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    homeOwnership: {
        type: String,
        required: true,
    },
    householdMembers: {
        type: String,
        required: true,
    },
    currentPets: {
        type: String,
        required: true,
    },
    petExperience: {
        type: String,
        required: true,
    },
    primaryCaregiver: {
        type: String,
        required: true,
    },
    hoursAlone: {
        type: String,
        required: true,
    },
    exercise: {
        type: String,
        required: true,
    },
    vetContact: {
        type: String,
        required: true,
    },
    petType: {
        type: String,
        enum: ['dog', 'cat', 'bird', 'rabbit', 'other'],
        required: true,
    },
    preferredAge: {
        type: String,
        enum: ['baby', 'young', 'adult', 'senior'],
        required: true,
    },
    sizePreference: {
        type: String,
        enum: ['small', 'medium', 'large'],
        required: true,
    },
    petGender: {
        type: String,
        enum: ['male', 'female', 'any'],
        required: true,
    },
    energyLevel: {
        type: String,
        enum: ['low', 'moderate', 'high'],
        required: true,
    },
    specificRequirements: {
        type: String,
        required: true,
    },
    travelPlan: {
        type: String,
        required: true,
    },
    vetCosts: {
        type: String,
        required: true,
    },
    training: {
        type: String,
        required: true,
    },
    yardFenced: {
        type: String,
        required: true,
    },
    surrenderReason: {
        type: String,
        required: true,
    },
    petId: {
        type: Schema.Types.ObjectId,
        ref: 'Pet',
        // required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected', 'cancelled'],
        default: 'pending',
    }
}, {timestamps: true});

const Adoption = model('Adoption', adoptionSchema);
module.exports = Adoption;
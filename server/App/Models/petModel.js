const { model, Schema } = require("mongoose");

const petSchema = Schema({
    petName: {
        type: String,
        required: true,
    },
    petType: {
        type: String,
        enum: ['dog', 'cat', 'bird', 'rabbit', 'other'],
        required: true,
    },
    petAge: {
        type: String,
        enum: ['baby', 'young', 'adult', 'senior'],
        required: true,
    },
    petSize: {
        type: String,
        enum: ['small', 'medium', 'large'],
        required: true,
    },
    petEnergyLevel: {
        type: String,
        enum: ['low', 'moderate', 'high'],
        required: true,
    },
    petGender: {
        type: String,
        enum: ['male', 'female'],
        required: true,
    },
    petBreed: {
        type: String,
        required: true,
    },
    petDescription: {
        type: String,
        required: true,
    },
    petImage: {
        type: String,
        required: true,
    },
    petAdoptionStatus: {
        type: String,
        enum: ['available', 'adopted'],
        default: 'available',
    },
    petAdoptionFee: {enum: ['low', 'moderate', 'high'],
        type: String,
        required: true,
    },
    petAdoptionDate: {
        type: Date,
    },
}, {timestamps: true});

const Pet = model('Pet', petSchema);

module.exports = Pet;
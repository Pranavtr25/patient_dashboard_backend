const mongoose = require('mongoose');

const priorAuthorizationSchema = new mongoose.Schema({
    treatmentType: {
        type: String,
        required: true
    },
    insurancePlan: {
        type: String,
        required: true
    },
    dateOfService: {
        type: Date,
        required: true
    },
    diagnosisCode: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'denied'],
        default: 'pending'
    },
    requestDate: {
        type: Date,
        default: Date.now
    },
    notes: {
        type: String,
        required: true
    },
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    }
});

const priorAuthorizationRequest = mongoose.model('priorAuthorizationRequest', priorAuthorizationSchema);

module.exports = priorAuthorizationRequest;

const mongoose = require('mongoose');

const healthCareProviderSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,  
  },
  password: {
    type: String,
    required: true
  }
});

const HealthCareProvider = mongoose.model('HealthCareProvider', healthCareProviderSchema, 'healthCareProviders');

module.exports = HealthCareProvider;

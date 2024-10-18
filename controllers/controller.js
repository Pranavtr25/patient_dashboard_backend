const HealthCareProvider = require("../models/healthCareProviderModel")
const Patient = require("../models/patientModel")
const priorAuthorizationRequest = require("../models/priorAuthorizationModel")
const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');


const sample = async (req,res) => {
    console.log("hihiih")
}

const verifyLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email,password)
        const provider = await HealthCareProvider.findOne({ email });
        console.log('provider')
        console.log(provider)
        if (!provider) {
          return res.status(400).json({ message: 'Invalid email or password' });
        }
    
        if (provider.password !== password) {
          return res.status(400).json({ message: 'Invalid email or password' });
        }
    
        const token = jwt.sign({ id: provider._id, email: provider.email }, JWT_SECRET, { expiresIn: '1h' });
    
        res.status(200).json({ token });
    } catch (error) {
        console.error(`error login verification \n ${error}`)
    }
}

const priorAuthorization = async(req,res) => {
    try {
        console.log('controller reached')
        console.log(req.body)
        const newRequest = new priorAuthorizationRequest(req.body)
        await newRequest.save()
        res.status(201).json({ message: 'Prior authorization request created successfully', data: newRequest });
    } catch (error) {
        console.error(`error creating prior aothorization request \n ${error}`)
        res.status(500).json({ message: 'Error creating prior authorization request', error: error.message });
    }
}

const priorAuthorizationCheck = async(req, res) => {
    try {
        console.log(`req.params.id : ${req.params.id}`)
        const authorizationRequest = await priorAuthorizationRequest.findOne({ patientId: req.params.id });
        console.log("123")
        console.log(authorizationRequest)
        if (authorizationRequest) {
          res.json({ status: authorizationRequest.status });
        } else {
          res.status(404).json({ message: 'No prior authorization found' });
        }
      } catch (error) {
        console.error(`error fetching authorization status \n ${error}`)
        res.status(500).json({ message: 'Error fetching authorization status', error: error.message });
      }
}

const getAuthorizationList = async(req, res) => {
    try {
        const requests = await priorAuthorizationRequest.find();
        console.log(requests)
        res.status(200).json(requests);
    } catch (error) {
        console.error(`error while getting authorization list \n ${error}`)
    }
}

const getPatientList = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; 
        const limit = parseInt(req.query.limit) || 6; 
        const skip = (page - 1) * limit; 
    
        const patients = await Patient.find().skip(skip).limit(limit);
        const totalPatients = await Patient.countDocuments(); 
    
        res.json({
          patients,
          totalPages: Math.ceil(totalPatients / limit),
          currentPage: page,
        });
    } catch (error) {
        console.error(`error getting patients list \n ${error}`)
    }
}

module.exports = {
    sample,
    verifyLogin,
    priorAuthorization,
    priorAuthorizationCheck,
    getAuthorizationList,
    getPatientList
} 
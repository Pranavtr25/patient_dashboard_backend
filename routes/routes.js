const express = require('express')
const router = express.Router()
const {
    sample,
    verifyLogin,
    priorAuthorization,
    priorAuthorizationCheck,
    getAuthorizationList,
    getPatientList
} = require('../controllers/controller')

router.get('/sample',sample)

router.post('/login',verifyLogin)

router.post('/prior-authorization', priorAuthorization)

router.get('/prior-authorization-check/:id', priorAuthorizationCheck)

router.get('/authorization-list', getAuthorizationList)

router.get('/patients-list', getPatientList)

module.exports = router
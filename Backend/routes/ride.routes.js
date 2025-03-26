const express = require('express');
const router = express.Router();
const { body } = require('express-validator');


router.post('/create' , 
  body('userId').isString().isLength({ min: 1 ,  max: 24 }).withMessage('userId is required'),
  body('pickup').isString().isLength({ min: 1 , max: 100 }).withMessage('pickup is required'),
  body('destination').isString().isLength({ min: 1 , max: 100 }).withMessage('destination is required'),
  
)







module.exports = router;
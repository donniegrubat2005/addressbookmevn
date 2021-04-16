const express = require('express')
const router = express.Router()
let Phonebook = require('../models/phonebook');

router.get('/', async(req,res) => {
  try{
         const phonebooks = await Phonebook.find()
         res.json(phonebooks)
  }catch(err){
      res.send('Error ' + err)
  }
})

router.post('/', async(req,res) => {
  const phonebook = new Phonebook({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      address: req.body.address
  })

  try{
      const phonebookData =  await phonebook.save() 
      res.json(phonebookData)
  }catch(err){
      res.send('Error')
  }
})

module.exports = router;
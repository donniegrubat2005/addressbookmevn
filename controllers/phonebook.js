const express = require('express')
let Phonebook = require('../models/phonebook');

exports.phonebook_getAll = async(req,res) => {
    try{
           const phonebooks = await Phonebook.find()
           res.json(phonebooks)
    }catch(err){
        res.send('Error ' + err)
    }
  }


  exports.phonebook_create = async(req,res) => {
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
  }

  exports.phonebook_edit = async(req,res) => {
    try{
           const phonebook = await Phonebook.findById(req.params.id)
           res.json(phonebook)
    }catch(err){
        res.send('Error ' + err)
    }
  }

  exports.phonebook_delete = async(req,res)=> {
    try{
        const phonebook = await Phonebook.findById(req.params.id) 
        const phonebookres = await phonebook.remove()
        res.json(phonebookres)   
    }catch(err){
        res.send('Error')
    }
  
  }

  exports.phonebook_update = async(req,res)=> {
    try{
        const phonebook = await Phonebook.findById(req.params.id) 
        phonebook.first_name = req.body.first_name
        phonebook.last_name = req.body.last_name
        phonebook.address = req.body.address
        const phonebookres = await phonebook.save()
        res.json(phonebookres)   
    }catch(err){
        res.send('Error')
    }
  
  }
const express = require('express')
const router = express.Router()

const PhonebookController = require('../controllers/phonebook')

router.get('/', PhonebookController.phonebook_getAll)

router.post('/', PhonebookController.phonebook_create)

router.get('/:id/edit', PhonebookController.phonebook_edit)

router.patch('/:id', PhonebookController.phonebook_update)

module.exports = router;
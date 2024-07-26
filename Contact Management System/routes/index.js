var express = require('express');
var router = express.Router();

const Contact = require('../models/contactSchema');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.post('/register', async function(req, res, next) {
  try{
    const contact = await Contact(req.body);
    await contact.save();
    res.redirect('allcontacts')
  }
  catch(err){
    res.send(err)
  }
});

router.get('/allcontacts', async function(req, res, next) {
  const contacts = await Contact.find();
  res.render('allcontacts', {contacts});
});

router.get('/update/:id', async function(req, res, next) {
  try{
    const contact = await Contact.findById(req.params.id);
    res.render('update', {contact: contact})
  }
  catch(err){
  res.send(err);
  }
});

router.post('/update/:id', async function(req, res, next) {
  try{
    const updatecontact = {...req.body};
    await Contact.findByIdAndUpdate(req.params.id, updatecontact);
    res.redirect('/allcontacts')
  }
  catch(err){
    res.send(err)
  }
});

router.get('/delete/:id', async function(req, res, next) {
try{
  await Contact.findByIdAndDelete(req.params.id);
  res.redirect('/allcontacts');
}
catch(err){
  res.send(err)
}
});

module.exports = router;

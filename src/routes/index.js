// REQUIRES
const express = require('express');
const e = require('../public/js/encryption.js');
const GP = require('../public/js/get-post-info');
// VARIABLES
const router = express.Router();
// /get_info
let url = '';
// /res/:legajo
let url_survey = 'http://encuesta.frm.utn.edu.ar/encuesta_materia/encuestamat.php'; //url of the survey
// GETS
// index
router.get('/', (req, res) => {
  res.render('page_down.html', {title: ' - Home', alert:'none', error:''}); // render de index page
});
// index-error
router.get('/error/:error', (req, res) => {
  res.render('index.html', {title: ` - Error-${req.params.error}`, alert:'', error:req.params.error}); // render the index page with a error alert
});
// finish page
router.get('/completadas/:legajo/:materias_completadas', (req, res) => {
  let legajo_decrypted = e.decrypt('holasoyunacontrasenia',req.params.legajo); // decrypt the lagjo number
  res.render('responce.html', {title: ` - Terminado: ${req.params.materias_completadas}`, legajo:legajo_decrypted, materias:req.params.materias_completadas}); // show the finish page
});
// POSTS
// get information about the surveys to complete
router.post('/get_info', (req, res) => {
  url = 'http://encuesta.frm.utn.edu.ar/encuesta_materia/encuestamat.php?legajo=' + req.body.legajo; //url of the survey selector 
  GP.get_info(url).then((data) => {
    // if the get_ingo returned an error, redirect to the error index page
    if (Object.keys(data).includes("error")) {
      res.redirect('/error/' + data.error);
    } else {
      res.cookie('data',data.info);  // safe the data in a cookie
      res.render('auto_form.html', {title: ' - Autocompletar', alert:'none', error:'', legajo:req.body.legajo, info:data.materias});  // show the config page
    };
  });
});
// serch the rest of info and send the post with the data
router.post('/res/:legajo', (req,res) => {
  console.log(req.body)
  let data = req.cookies.data;  //load the data in the cookie  
  GP.encuesta(url_survey,data,req).then(() => {
    let legajo_encrypted = e.encrypt('holasoyunacontrasenia',req.params.legajo); // encrypt the lagjo number
    let materias_completadas = Object.keys(req.body).length - 1;
    res.redirect(`/completadas/${legajo_encrypted}/${materias_completadas}`); // redirect to the finish page
  });
});

module.exports = router;
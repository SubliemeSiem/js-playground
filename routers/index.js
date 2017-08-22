const router = require('express').Router();

router.get('/', function(req, res){
  //TODO: get html from a template
  const page = '<div>Hello world</div>';

  // set status to 200 OK and send the page
  res.status(200).send(page);
});

module.exports = router;
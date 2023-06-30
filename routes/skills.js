var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills')

/* GET /skills */
router.get('/', skillsCtrl.index);
//get skills/new
router.get('/new', skillsCtrl.new);
//GETs /skills/:id
router.get('/:id', skillsCtrl.show);
//get /skills/:id/edit
router.get('/:id/edit', skillsCtrl.edit);
//post /skills
router.post('/', skillsCtrl.create);
//delete /skills/:id
router.delete('/:id', skillsCtrl.delete);
//put /skills/:id
router.put('/:id', skillsCtrl.update);

module.exports = router;

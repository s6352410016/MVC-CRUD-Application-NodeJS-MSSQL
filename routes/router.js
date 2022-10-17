const router = require('express').Router();
const controller = require('../controllers/empController');

router.get('/' , controller.getEmployees);
router.get('/addemployee' , controller.add);
router.get('/update/:id' , controller.update);
router.get('/delete/:id' , controller.deleteEmployee);
router.post('/addemployee' , controller.addEmployee);
router.post('/update/:id' , controller.updateEmployee);

module.exports = router;
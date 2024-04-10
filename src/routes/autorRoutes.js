const {Router} = require('express');
const AutorController = require('../controllers/AutorController.js');

const autorController = new AutorController();

const router = Router();

router.get('/autores', (req, res) => autorController.getTodosRegistros(req,res));
router.get('/autores/:id', (req, res) => autorController.getRegistroPorId(req,res));
router.post('/autores', (req, res) => autorController.cria(req,res));
router.put('/autores/:id', (req, res) => autorController.update(req,res));
router.delete('/autores/:id', (req, res) => autorController.delete(req,res));

module.exports = router;
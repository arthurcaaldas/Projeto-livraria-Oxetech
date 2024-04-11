const {Router} = require('express');
const LivroController = require('../controllers/LivroController.js');

const livroController = new LivroController();

const router = Router();

router.get('/livros', (req, res) => livroController.getTodosRegistros(req,res));
router.get('/livros/:id', (req, res) => livroController.getRegistroPorId(req,res));
router.post('/livros', (req, res) => livroController.create(req,res));
router.put('/livros/:id', (req, res) => livroController.update(req,res));
router.delete('/livros/:id', (req, res) => livroController.delete(req,res));

module.exports = router;
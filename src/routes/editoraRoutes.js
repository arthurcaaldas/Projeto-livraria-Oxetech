const {Router} = require('express');
const EditoraController = require('../controllers/EditoraController.js');

const editoraController = new EditoraController();

const router = Router();

router.get('/editoras', (req, res) => editoraController.getTodosRegistros(req,res));
router.get('/editoras/:id', (req, res) => editoraController.getRegistroPorID(req,res));
router.post('/editoras', (req, res) => editoraController.create(req,res));
router.put('/editoras/:id', (req, res) => editoraController.update(req,res));
router.delete('/editoras/:id', (req, res) => editoraController.delete(req,res));

module.exports = router;
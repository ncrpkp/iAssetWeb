const express = require('express')
const router = express.Router()

const { read } = require('../controllers/product')



//http://localhost:5000/api/product
router.get('/product',(req,res)=>{
    res.send('Hello product Enpoint')
})
router.get('/product/:id',(req,res)=>{
    res.send('Hello 1 Product Enpoint')
})
router.post('/product',(req,res)=>{
    res.send('Hello Post Enpoint')
})
router.put('/product/:id',(req,res)=>{
    res.send('Hello Put Enpoint')
})
router.delete('/product/:id',(req, res)=>{
    res.json({ name: 'tam', id:555 })
})

module.exports = router
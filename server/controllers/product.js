const Product = require('../Models/Product')


exports.read = async(req,res)=>{
    res.send('Hello controller read')
}

exports.list = async(req,res)=>{
try {
    res.send('Hello list')
} catch (error) {
    console.log(err)
    res.status(500).send('Server Error')
}
}

exports.create = async (req, res) => {
    try {
        // code
        console.log(req.body)
        const producted = await Product(req.body).save()
        res.send(producted)
    } catch (err) {
        // error
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.update = async(req,res)=>{
try {
    res.send('Hello update')
} catch (error) {
    console.log(err)
    res.status(500).send('Server Error')
}
}
exports.remove = async(req,res)=>{
try {
    res.send('Hello Delete')
} catch (error) {
    console.log(err)
    res.status(500).send('Server Error')
}
}
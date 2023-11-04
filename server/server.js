const express = require('express');

const morgan = require('morgan')
const cors = require('cors')
const bodyParse = require('body-parser')

const connectDB = require('./Config/db')

const { readdirSync } = require('fs')
// const productRouters = require('./Routes/product')
// const authRouters = require('./Routes/auth');
// const app = express();
// const port = process.env.PORT || port;
// const www = process.env.WWW || './';
// app.use(express.static(www));
// console.log(`serving ${www}`);
// app.get('*', (req, res) => {
//     res.sendFile(`index.html`, { root: www });
// });
// app.listen(port, () => console.log(`listening on http://localhost:${port}`));

const app = express();

connectDB()

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParse.json({limit: '10mb'}))
//Route
// app.get('/product',(req,res)=>{
//     res.send('Hello Empoint')
// })
//Route2
// app.use('/api', productRouters)
// app.use('/api', authRouters)

//Route3
readdirSync('./Routes').map((r)=> app.use('/api', require('./Routes/'+r)))



app.listen(5000, ()=> console.log('server running is port 5000'))
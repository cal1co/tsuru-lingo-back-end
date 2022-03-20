const express = require('express');
const app = express();
// const PORT = 3000;
const PORT = process.env.PORT || 3000;

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const jwtAuthenticate = require('express-jwt')

const langsController = require('./controllers/langsController')
// This should be in a .env file (NOT YOUR REPO) and
// it should be generated from a program like md5
const SERVER_SECRET_KEY = 'yourSecretKeyHereCHICKEN'

const User = require('./models/User')

const cors = require('cors');
app.use( cors() );

app.use( express.json() )
// app.use( express.urlencoded( { extended: true } ) )

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT} ...`);
});

// MongoDB initialisation section //////////////////
const dotenv = require('dotenv').config()
const mongoose = require('mongoose');

uri = process.env.MONGO_URI || 'mongodb://127.0.0.1/tsuru'
mongoose.connect(uri);

const db = mongoose.connection;

db.on('error', (err) => {
  console.log('Connection error', err);
  process.exit( 1 ); // quit the server
  // TODO: handle gracefully instead? Keep server running?
});

app.use( express.urlencoded({ extended: true }) );



// INDEX JS <-  if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`




app.post('/login', async (req, res) => {
    // curl http://localhost:3000/login -X POST -d 'email=ro@ga.co&password=chicken'
    console.log('POST /login', req.body)
    const {email, password} = req.body
    try {
        const user = await User.findOne({email})
        // console.log('user', user)

        if(user && bcrypt.compareSync(password, user.passwordDigest)){
            const token = jwt.sign(
                { _id: user._id},
                process.env.SERVER_SECRET_KEY,
                { expiresIn: '72h'}

            );
            res.json({token})
            // In your frontend, sgtore the JWT token in state or even 
            // better, in your global Redux store
        } else {
            res.sendStatus(401)
        }

    } catch(err) {
        console.log('Error querying User:', err);
        res.sendStatus(500)
    }

}) // /login POST

// const generateToken = (id) => {
//     return jwt.sign({id}, process.env.SERVER_SECRET_KEY)
// }


// app.use(checkAuth())

// app.use( async (req,res,next) => {

//     try {
//         const user = await User.findOne({_id:req.auth._id})
//         req.user = user;
//         next(); // move on to next handler 
//     } catch(err){
//         console.log('Error querying user in auth middleware', err)
//         res.sendStatus(500);
//     }
// })

app.get('/:lang', langsController.show)

app.get('/:lang/:module', langsController.module)
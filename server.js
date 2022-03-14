const express = require('express');
const app = express();
const PORT = 3000;

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const jwtAuthenticate = require('express-jwt')


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

const mongoose = require('mongoose');

// Load our Flight model file (and any others?)
// const Flight = require('./models/Flight');

// Connect to DB server; note the DB selection: 'ba', like a path
mongoose.connect('mongodb://127.0.0.1/tsuru');

const db = mongoose.connection;

db.on('error', (err) => {
  console.log('Connection error', err);
  process.exit( 1 ); // quit the server
  // TODO: handle gracefully instead? Keep server running?
});

app.use( express.urlencoded({ extended: true }) );



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
                SERVER_SECRET_KEY,
                { expiresIn: '72h'}

            );
            const filteredUser = {
                name:user.name,
                email:user.email,
                reservations:user.reservations
            }
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


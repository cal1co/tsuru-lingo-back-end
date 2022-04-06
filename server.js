const dotenv = require('dotenv').config()
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

const mongoose = require('mongoose');
let ure = process.env.MONGO_URI
console.log('!!!!!!!!!!!!!!!!!!!!!!:', ure)
uri = `${process.env.MONGO_URI}` || 'mongodb://127.0.0.1/tsuru'
mongoose.connect(uri);

const db = mongoose.connection;

db.on('error', (err) => {
  console.log('Connection error', err);
  process.exit( 1 ); // quit the server
  // TODO: handle gracefully instead? Keep server running?
});

app.use( express.urlencoded({ extended: true }) );

 

// INDEX JS <-  if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
// app.get('*', checkAuth())




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
                // { algorithm: 'RS256' },
                { expiresIn: '72h'},
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
let user = ''
function checkAuth(req, res, next){
    console.log('checkAuth')
    const token = req

    if (token){
        jwt.verify(token, process.env.SERVER_SECRET_KEY, async (err, decodedToken) => {
            if (err){
                console.log(err.message);
                res.locals.user = null; 
                next();
            } else {
                console.log(decodedToken);
                user = await User.findOne({_id:decodedToken._id})
                return user 
                // res.locals.currentUser = user 
                // console.log(res)
                next()
            }
        }) // verify 
    } else {
        res.locals.currentUser = null;
        next();
    } // if token - else 
}


app.get('/:lang', langsController.show)

app.get('/:lang/:module', langsController.module)


app.post('/:module/pass', async (req, res) => {
    try {
        console.log('PASS CALLED', req.body.token)
        checkAuth(req.body.token)
        console.log('LANG COMPLETE', user._id)
        console.log('PASSED', user.passed)
        
        if(!user.passed.includes(req.body.lesson)){
            console.log(`user doesn't include:`, req.body.lesson)
            user.passed.push(req.body.lesson)
            // console.log('lesson passed and added to user')
        }
        console.log(user)
        user.save()
    } catch (err) {
        
    }
})

app.get('/users/current/user', async (req, res) => {
    try {
        console.log('fetching users', req.query.token)
        checkAuth(req.query.token)
        res.json( user );
    } catch (err) {
        console.log('error fetching info:', err)
    }

})

app.get('/complete/modules/:num', langsController.practice)


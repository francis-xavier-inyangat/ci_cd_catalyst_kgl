const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const passport = require('passport')
require('dotenv').config()

// start x-session
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
})

// routes
const landingRoutes = require('./routes/landingpageRoutes')
const loginRoutes = require('./routes/loginRoutes')
const passwordresetRoutes = require('./routes/passwordresetroutes')
const procureRoutes = require('./routes/procurementroutes')
const salesRoutes = require('./routes/salesroutes')
const creditRoutes = require('./routes/creditroutes')
const registerRoutes = require('./routes/registerroutes')
const registeredUsersList = require('./routes/registeredUsersList')
const dashboardRoutes = require('./routes/dashboardRoutes')

// models
const config = require('./config/database')
const RegisterUser = require('./models/RegisterModel')

// initializing the express server
const app = express()

const PORT = process.env.PORT || 2050
// seting up mongoose

mongoose.connect(config.database, { useNewUrlParser: true })

const db = mongoose.connection

db.once('open', function () {
  console.log('Connected to MongoDB')
})

db.on('error', function (err) {
  console.error(err)
})

// views settings or configurations
app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.urlencoded({ extended: true }))

// to access static files the server checks the public folder
app.use(express.static(path.join(__dirname, 'public')))
// setting the sessions
app.use(expressSession)
// initiazing passport and they shd be like this
// constantly they  are methods(line 43-44)
app.use(passport.initialize())
app.use(passport.session())

passport.use(RegisterUser.createStrategy())
passport.serializeUser(RegisterUser.serializeUser())
passport.deserializeUser(RegisterUser.deserializeUser())

// // Login Checker
const loginChecker = function (req, res, next) {
  if (req.path !== '/login' && req.path !== '/' && !req.session.user) {
    res.redirect('/login')
  }
  next()
}
app.use(loginChecker)

// serve routes
app.use('/', landingRoutes)
app.use('/login', loginRoutes)
app.use('/register', registerRoutes)
app.use('/resetpassword', passwordresetRoutes)
app.use('/procurement', procureRoutes)
app.use('/sales', salesRoutes)
app.use('/credit', creditRoutes) // use same route for sales and credit sales
app.use('/users', registeredUsersList) // route to system users
app.use('/dashboard', dashboardRoutes)

// handling non existing routes
app.get('*', (req, res) => {
  // res.status(404).send('Sorry, we have hit a dead end here. GO BACK');
  res.status(404).render('pageNotFound')
})

// server
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`))

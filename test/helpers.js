const supertest  = require('supertest')  
const chai       = require('chai')
const faker      = require('faker')
const app        = require('../app')

global.app     = app    
global.expect  = chai.expect  
global.request = supertest(app) 

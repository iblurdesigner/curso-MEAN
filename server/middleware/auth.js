import Debug from 'debug'
import { secret } from '../config'
import jwt from 'jsonwebtoken'

const debug = new Debug('platzi-overflow:auth-middleware')

export const users = [
  {
    firstName: 'David',
    lastName: 'Flores',
    email: 'd@flores.com',
    password: '123456',
    _id: 123
  }
]

export const findUserByEmail = e => users.find(({email}) => email === e)

export const required = (req, res, next) => {
  jwt.verify(req.query.token, secret, (err, token) => {
    if(err) {
      debug('JWT was not encrypted with out secret')
      return res.status(401).json({
        message: 'Unauthorized',
        error: err
      })
    }

    debug(`Token verified ${token}`)
    req.user = token.user
    next()
  })
}

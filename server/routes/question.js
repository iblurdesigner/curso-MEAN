import express from 'express'

const app = express.Router()

const question = {
  _id: 1,
  title: 'Como reutilizo un componente en Android?',
  description: 'Miren esta es mi pregunta...',
  createdAt: new Date(),
  icon: 'devicon-android-plain',
  answers: [],
  user: {
    firstName: 'David',
    lastName: 'Flores',
    email: 'd@flores.com',
    password: '123456'
  }
}

const questions = new Array(10).fill(question)

// /api/questions
app.get('/', (req, res) => res.status(200).json(questions))

// /api/questions/:id
app.get('/:id', (req, res) => {
  const { id } = req.params
  const q = questions.find(({ _id }) => _id === +id)
  res.status(200).json(q)
})

// POST/api/questions
app.post('/', (req, res) => {
  const question = req.body
  question._id = +new Date()
  question.user = {
    email: 'david@mp.com',
    password: '12345',
    firstName: 'David',
    lastName: 'Flores'
  }
  question.createdAt = new Date()
  question.answers = []
  questions.push(question)
  res.status(201).json(question)
})

export default app

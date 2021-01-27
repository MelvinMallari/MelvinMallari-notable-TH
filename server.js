const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const kind = {
  1: 'New Patient',
  2: 'Follow-up',
}

const timeSlot = {
  1: '8:00AM',
  2: '8:30AM',
  3: '9:00AM',
  4: '9:30AM',
}

const physicians = [
  {
    id: 1,
    firstName: 'Derrick',
    lastName: 'Rose',
    email: 'derrick@notablehealth.com',
  },
  {
    id: 2,
    firstName: 'Stephen',
    lastName: 'Curry',
    email: 'steph@notablehealth.com',
  },
  {
    id: 3,
    firstName: 'Fred',
    lastName: 'Vanvleet',
    email: 'fred@notablehealth.com',
  },
]

const patients = [
  {
    id: 1,
    firstName: 'Richard',
    lastName: 'Feynman',
    physicianId: 1,
    kind: kind[1],
    timeSlot: timeSlot[1],
  },
  {
    id: 2,
    firstName: 'Marie',
    lastName: 'Cury',
    physicianId: 2,
    kind: kind[2],
    timeSlot: timeSlot[2],
  },
  {
    id: 3,
    firstName: 'Max',
    lastName: 'Planck',
    physicianId: 3,
    kind: kind[1],
    timeSlot: timeSlot[3],
  },
  {
    id: 4,
    firstName: 'Enrico',
    lastName: 'Fermi',
    physicianId: 2,
    kind: kind[1],
    timeSlot: timeSlot[4],
  },
  {
    id: 5,
    firstName: 'James',
    lastName: 'Maxwell',
    physicianId: 1,
    kind: kind[1],
    timeSlot: timeSlot[2],
  },
]

app.get('/physicians', cors(), (req, res) => {
  res.json(physicians)
})

app.get('/physicians/:physicianId/patients', cors(), (req, res) => {
  const physicianId = req.params.physicianId
  const physicianPatients = patients.filter(
    p => p.physicianId === parseInt(physicianId),
  )
  res.json(physicianPatients)
})

const PORT = 5000

app.listen(PORT, () => `Server running on port ${PORT}`)

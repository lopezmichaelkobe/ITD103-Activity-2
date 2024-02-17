const express = require("express")
const mongoose = require('mongoose')
const UserModel = require('./User')
const cors = require('cors')

const app = express();
app.use(cors())
const port = 3001;


app.use(express.json())


mongoose.connect('mongodb://127.0.0.1/nodeexpressdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(db => console.log("DB is connected :)"))
.catch(err => console.log(err));


app.get('/', (req, res) => {
  UserModel.find()
     .then(users => res.json(users))
     .catch(err => res.json(err))
 
})


app.get('/get/:id', (req, res) => {
    const id = req.params.id
    UserModel.findById({ _id: id }) //_id from mongo
     .then(post => res.json(post))
     .catch(err => console.log(err))
})


app.post('/create' , (req, res ) => {
    UserModel.create(req.body)
      .then(user => res.json(user))
      .catch(err => res.json(err))
})


app.put('/update/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate({ _id:id },{
    CarName: req.body.CarName,
    Manufacturer: req.body.Manufacturer,
    Year: req.body.Year,
    Country: req.body.Country,
    Propulsion: req.body.Propulsion
  }).then(user=> res.json(user))
    .catch(err => res.json(err))
}),


app.delete('/deleteuser/:id', (req,res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({ _id:id })
    .then(response => res.json(response))
    .catch(err => res.json(err))
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

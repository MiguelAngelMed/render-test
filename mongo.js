
const mongoose = require('mongoose')
if (process.argv.length<3) {
    console.log('give password as argument')
    process.exit(1)
  }
  
const password = process.argv[2]

const url =
  `mongodb+srv://mike:${password}@cluster0.4cmxxt7.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

/*
const note = new Note({
  content: 'Damiif',
  date: new Date(),
  important: true,
})


const guardar = (nota) => {
    nota.save().then(result => {
        console.log('note saved!')
        mongoose.connection.close()
    })
}

guardar(note)
*/


Note.find({ important: true }).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
})
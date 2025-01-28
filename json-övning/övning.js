import fs from 'fs';

const dataBuffer = fs.readFileSync('övning.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'Arvid'
data.age = 20
data.planet = 'mars'

const dataString = JSON.stringify(data)
fs.writeFileSync('övning.json', dataString)
console.log(dataString)

// challange: append a message to notes.txt

const fs = require('fs')

fs.appendFileSync('notes.txt', '\nbla bla text här')
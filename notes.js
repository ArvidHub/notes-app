import fs from 'fs';
const getNotes = () => {
    return 'lorem ipsum dolor sit amet consectetur adipisicing elit...';
}

const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length > 0) {
        console.log('Note title taken!');
        return;
    }
    notes.push({
        title: title,
        body: body
    });
    saveNotes(notes);
}

const removeNotes = (title) => {
    const notes = loadNotes();
    const notesToRemove = notes.filter((note) => note.title === title);
    if (notesToRemove.length === 0) {
        console.log('Note not found!');
        return;
    }
    console.log(`Note with title: ${title} removed!`);
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
    console.log('Note saved!');
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}

export { getNotes, addNotes, removeNotes };
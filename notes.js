import fs from 'fs';
import chalk from 'chalk';

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
    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log(chalk.green('Note removed'));
    } else {
        console.log(chalk.red('No note found!'));
    }
};

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
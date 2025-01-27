import { getNotes } from './notes.js';
import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

// Configure yargs
yargs(hideBin(process.argv))
    .command({
        command: 'add',
        describe: 'Add a new note',
        handler(argv) {
            console.log('Adding a new note', argv);
        }
    })
    .command({
        command: 'remove',
        describe: 'Remove a note',
        handler(argv) {
            console.log('Removing the note', argv);
        }
    })
    .command({
        command: 'read',
        describe: 'Read a note',
        handler(argv) {
            console.log('Reading the note', argv);
        }
    })
    .command({
        command: 'list',
        describe: 'List all notes',
        handler(argv) {
            console.log('Listing all notes', argv);
        }
    })
    .parse();
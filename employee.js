const fs = require('fs')

const employee = function(oldNote) {
    const newNote = JSON.parse(oldNote)

    const mNote = newNote.map(function(n) {
        return n.employee;
    })

    console.log("Employee:" + mNote)
}

module.exports = employee
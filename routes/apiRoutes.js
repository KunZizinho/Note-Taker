const fs = require("fs")
const path = require("path");

var noteData;

module.exports = function (app) {
    fs.readFile("../db/db.json", "utf8", (err, data) =>{
        if(err) throw err;
        noteData = JSON.parse(data);
        console.log("here")
    })

    app.get("/api/notes", (req, res) => {
        res.json(noteData);
        console.log(noteData);
    });

    app.post("/api/notes", (req, res) => {
        console.log("test here")
        var newNotes = req.body;
        let parseData = JSON.stringify(noteData);
        fs.writeFile(path.join(db.json), parseData, err =>{
            if(err) throw err;

        })
        res.json(noteData)
    })

    app.delete("/api/notes/:id", (req, res) => {

        var deleteData = req.params.id;
        console.log(deleteData)
        for(var i = 0; i < noteData.length; i++){
            if(deleteData === noteData[i].title){
                noteData.splice(i, 1)
            };
        };

        let parseData = JSON.stringify(noteData);
        fs.writeFile(path.join("../db/db.json"), parseData, err => {
            if(err) throw err;

        })
        console.log(noteData)
        res.json(noteData);
    });
};
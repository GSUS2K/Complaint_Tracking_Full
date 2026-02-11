
import express from 'express'

import bodyParser from 'body-parser';

import path from 'path'

import fs from 'fs'

import { fileURLToPath } from 'node:url';

import { dirname } from 'node:path'

const app = express();

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename)

let newCompl ={};

let id=5;
let idName="";

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',express.static(path.join((__dirname),'/public')))

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join((__dirname),'/public','/index.html'));
});

const stream = fs.createReadStream("./complaints.json",'utf-8');

let complaints = [{}];

stream.on('data', (chunk)=>{

    complaints = JSON.parse(chunk);

});

function updatedFile() {

        const newstream = fs.createWriteStream("./complaints.json",[{}]);

        let complaintsJson = JSON.stringify(complaints);

        newstream.write(complaintsJson);

        complaints = JSON.parse(complaintsJson);

}

app.get('/complaints', (req,res)=>{

    console.log("-------------------------------------------------------------------------------------------")

    updatedFile();

    res.json(complaints);

    console.log(complaints)
});

app.get('/complaints/:id', (req,res)=>{

    console.log("-------------------------------------------------------------------------------------------")

    updatedFile();

    let complaintID = complaints.filter(c => c.id == req.params.id)

    res.json(complaintID);

    console.log(complaintID)
});

app.post('/complaints', (req,res)=>{

    console.log("-------------------------------------------------------------------------------------------")

        id++;
if(id<10)
{
    idName= "IS-00"+id;
}
else if(id<100)
{
    idName= "IS-0"+id;
}
else{
    idName= "IS-"+id;
}

    newCompl =
        {"id": idName,
        "name": req.body.nmeinp,
        "title": req.body.ttlinp,
        "description": req.body.descinp,
        "status": "pending",
        "e_mail": req.body.emlinp}
    

    complaints.push(newCompl);

    updatedFile();

    res.send(newCompl);

    console.log(newCompl)

    console.log('---------Complaint created---------')

});

app.put('/complaints/:id', (req,res)=>{

    console.log("-------------------------------------------------------------------------------------------")

    const id = req.params.id;

    console.log("id:"+id)

    complaints = complaints.map(c => c.id == id ? {
        ...c,
        status: req.body.status
    } : c)

    updatedFile();

    res.send("---------Complaint resolved---------")

    console.log('---------Complaint resolved---------')
});

app.delete('/complaints/:id', (req,res)=>{

    console.log("-------------------------------------------------------------------------------------------")

    complaints = complaints.filter(c => c.id != req.params.id)

    updatedFile();

    res.send("---------Complaint deleted---------")

    console.log('---------Complaint deleted---------')
});

app.listen(3000, ()=> {
    console.log("http://localhost:3000 is running!")
})

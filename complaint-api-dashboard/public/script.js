
const form = document.getElementById('cmpbox');

form.addEventListener("change", () => {
    document.getElementById('sbmt').disabled = !form.checkValidity()
});

document.getElementById("sbmt").onclick = function () {

    const myForm = document.getElementById('cmpbox');

    let name = document.getElementById("nmeinp").value

myForm.addEventListener('submit', function() {
	this.querySelector('button[type="submit"]')
		.setAttribute('disabled', 'disabled');
}, false);

    const responseMsg = document.getElementById("sbmd");

    myForm.addEventListener('submit', async function (event) {

    event.preventDefault();

            const respo2 = await fetch("/complaints");

                const newData2 = await respo2.json();

                const complID2 = newData2[newData2.length-1].id;

                const lastId = Number(complID2.substring(3)) + 1;

                // console.log("lastID: "+lastId)

    const formData = new FormData(myForm);

    if(lastId<10)
{
    formData.append("id",`IS-00${lastId}`)
}
else if(lastId<100)
{
    formData.append("id",`IS-0${lastId}`)
}
else{
    formData.append("id",`IS-${lastId}`)
}
    
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('/complaints', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
   ); 

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const respo = await fetch("/complaints");

                const newData = await respo.json();

                const complID = newData[newData.length-1].id;

        responseMsg.textContent = `Hi, ${name}! Your complaint: ${complID} is created. Please refresh page if you wish to make another complaint! `
        responseMsg.style.color = 'green';
        
    } catch (error) {
        console.error('Error:', error);
        responseMsg.textContent = 'Form submission failed.';
        responseMsg.style.color = 'red';
    }
});

}

async function updateStats(){

     const response = await fetch("/complaints");

                let data = await response.json();

                // console.log(data.length)

                document.getElementById('tcval').innerHTML = data.length;

    let rnData = data.filter(c => c.status == 'resolved')

        document.getElementById('rsval').innerHTML = rnData.length;

                // console.log(rnData.length)

    let rjData = data.filter(c => c.status == 'rejected')

        document.getElementById('rjval').innerHTML = rjData.length;

    let pnData = data.filter(c => c.status == 'pending')

        document.getElementById('pnval').innerHTML = pnData.length;

}

async function allJson(){

            document.getElementById('txtflr').value = ""
       
     const response = await fetch("/complaints");

                const data = await response.json();

                // console.log(data.length)

const myNode = document.getElementById("jsonct");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }

let jsonLen = data.length;

let i=0;

while(i<jsonLen)
{

// console.log(data[i].id)
// console.log(data[i].status)
// console.log(data[i].title)
// console.log(data[i].name)
// console.log(data[i].e_mail)
// console.log(data[i].description)

var iDiv = document.createElement('div');

    iDiv.id = 'block'+i;
    iDiv.className = 'block';

var idsts = document.createElement('div');
var idp = document.createElement('p');
var stp = document.createElement('p');
var ttlp = document.createElement('div');
var nmel = document.createElement('div');
var nmep = document.createElement('p');
var emlp = document.createElement('p');
var desc = document.createElement('div');
var desch = document.createElement('h3');
var descp = document.createElement('p');
var btns = document.createElement('div');
var setpn = document.createElement('button');
var setrs = document.createElement('button');
var setrj = document.createElement('button');
var gap = document.createElement('br');
var gap2 = document.createElement('br');
var gap3 = document.createElement('br');
var rule = document.createElement('hr');
var dlt = document.createElement('button');

idsts.id= 'idsts'+i;
idsts.className='idsts';
idp.id= 'idp'+i;
idp.className='idp';
stp.id= 'stp'+i;
stp.className='stp';
ttlp.id = 'ttlp'+i;
ttlp.className = 'ttlp';
nmel.id= 'nmel'+i;
nmel.className= 'nmel';
nmep.id= 'nmep'+i;
nmep.className= 'nmep';
emlp.id= 'emlp'+i;
emlp.className= 'emlp';
desc.id= 'desc'+i;
desc.className= 'desc';
desch.id= 'desch'+i;
desch.className= 'desch';
descp.id= 'descp'+i;
descp.className= 'descp';
btns.id= 'btns'+i;
btns.className = 'btns';
setpn.id= 'setpn'+i;
setpn.className= 'setpn';
setrs.id= 'setrs'+i;
setrs.className= 'setrs';
setrj.id= 'setrj'+i;
setrj.className= 'setrj';
dlt.id= 'dlt'+i;
dlt.className= 'dlt'

idsts.style.cssText = `display: flex;
    text-align: center;
    width: 250px;
    margin-left: 20px;
    margin-right: 20px;`;

    idp.style.cssText = `margin: 10px;
border-radius: 20px;
width: 100px;
display: inline-block;
background-color: #cccccc;`

stp.style.cssText = `margin: 10px;
border-radius: 20px;
width: 150px;
display: inline-block;
background-color: #cccccc;`

iDiv.style.cssText = `height: 250px;
    background-color: white;
    width: 1000px;
     margin-left: 100px;
    margin-top: 20px;    
  border-radius: 20px;`

  ttlp.style.cssText = `margin: 0px;
width: 225px;
display: inline-block;
float:left;
    font-size: large;
`
nmel.style.cssText = `display: flex;
    text-align: center;
    width: 350px;
    margin-left: 20px;
    margin-right: 20px;
    flex: right;
    position: relative;
    left: 500px;
    `;

nmep.style.cssText = `margin: 10px;
margin-right:150px;
width: auto;
padding: 20px;
display: inline-block;
    border: solid black;
border-style: double;
`;    

emlp.style.cssText = `margin: 10px;
width: 100px;
display: inline-block;`;   

desc.style.cssText = `display: flex;
    text-align: center;
    width: 950px;
    margin-left: 20px;
    margin-right: 20px;
    `

    desch.style.cssText = `margin: 10px;
width: 200px;
display: inline-block;`

descp.style.cssText = `margin: 10px;
width: 900px;
display: inline-block;
background-color: #cccccc;`

btns.style.cssText=`display: inline-block;
    text-align: center;
    width: 950px;
    margin-left: auto;
    margin-right: auto;`

    setpn.style.cssText=`width: 150px;
    height:30px;
    display: inline-block;
    margin: 15px;
    margin-left:175px;
    cursor:pointer;
    background-color: yellow;
    `
    setrs.style.cssText=`width: 150px;
    height:30px;
    margin: 15px;
    display: inline-block;
    cursor:pointer;
    background-color: greenyellow;`

    setrj.style.cssText=`width: 150px;
    height: 30px;
    margin: 15px;
    display: inline-block;
    cursor:pointer;
    background-color: red;`

    dlt.style.cssText=`width: 75px;
    height:30px;
    margin-left: 130px;
    display:inline-block;
    background-color: firebrick;
    cursor:pointer;
    `

idp.append('ID: ',data[i].id)
stp.append('Status: ',data[i].status)
ttlp.append(data[i].title)
nmep.append(data[i].name)
emlp.append(data[i].e_mail)
desch.append('Description:')
descp.append(data[i].description)
setpn.append('Set Pending')
setrs.append('Set Resolved')
setrj.append('Set Rejected')
dlt.append('DEL')

    document.getElementById('jsonct').appendChild(iDiv);
    document.getElementById('block'+i).appendChild(idsts);
    document.getElementById('idsts'+i).appendChild(idp);
    document.getElementById('idsts'+i).appendChild(stp);
    document.getElementById('block'+i).appendChild(nmel);
    document.getElementById('nmel'+i).appendChild(nmep);
    document.getElementById('nmel'+i).appendChild(emlp);
    document.getElementById('block'+i).appendChild(ttlp);
    document.getElementById('block'+i).appendChild(gap2);
    document.getElementById('block'+i).appendChild(rule);
    document.getElementById('block'+i).appendChild(desc);
    document.getElementById('desc'+i).appendChild(desch);
    document.getElementById('desc'+i).appendChild(descp);
    document.getElementById('block'+i).appendChild(btns);
    document.getElementById('btns'+i).appendChild(setpn);
    document.getElementById('btns'+i).appendChild(setrs);
    document.getElementById('btns'+i).appendChild(setrj);
    document.getElementById('btns'+i).appendChild(dlt);

(function(pnVal){
        setpn.addEventListener("click", function() {
        fetch(`/complaints/${pnVal}`, {
                method: 'PUT',
                headers: {'Content-type': 'application/json; charset=UTF-8'},
                  body: JSON.stringify({status: "pending"})
            }).then(response => response.json())
            document.getElementById('alflr').click()
            updateStats();
        }, false);
    })(data[i].id);;

(function(rsVal){
        setrs.addEventListener("click", function() {
        fetch(`/complaints/${rsVal}`, {
                method: 'PUT',
                headers: {'Content-type': 'application/json; charset=UTF-8'},
                  body: JSON.stringify({status: "resolved"})
            }).then(response => response.json())
            document.getElementById('alflr').click()
            updateStats();
        }, false);
    })(data[i].id);;

(function(rjVal){
        setrj.addEventListener("click", function() {
        fetch(`/complaints/${rjVal}`, {
                method: 'PUT',
                headers: {'Content-type': 'application/json; charset=UTF-8'},
                  body: JSON.stringify({status: "rejected"})
            }).then(response => response.json())
            document.getElementById('alflr').click()
            updateStats();
        }, false);
    })(data[i].id);;

    (function(dltVal){
        dlt.addEventListener("click", function() {
            // console.log("ID: "+dltVal)
            fetch(`/complaints/${dltVal}`, {
                method: 'DELETE'
            }).then(response => response.json())
            document.getElementById('alflr').click()
            updateStats();
        }, false);
    })(data[i].id);

    i++;

}

}

async function flrJson(){

     const response = await fetch("/complaints");

                let data = await response.json();

                // console.log(data.length)

const myNode = document.getElementById("jsonct");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }

  let textFilter = document.getElementById('txtflr').value;

    data = data.filter(c => c.id.includes(textFilter))

let jsonLen = data.length;
// console.log('length: '+jsonLen)
    console.log('--------- Search Filtered Data ---------')

let i=0;

while(i<jsonLen)
{

// console.log(data[i].id)
// console.log(data[i].status)
// console.log(data[i].title)
// console.log(data[i].name)
// console.log(data[i].e_mail)
// console.log(data[i].description)

var iDiv = document.createElement('div');

    iDiv.id = 'block'+i;
    iDiv.className = 'block';

var idsts = document.createElement('div');
var idp = document.createElement('p');
var stp = document.createElement('p');
var ttlp = document.createElement('div');
var nmel = document.createElement('div');
var nmep = document.createElement('p');
var emlp = document.createElement('p');
var desc = document.createElement('div');
var desch = document.createElement('h3');
var descp = document.createElement('p');
var btns = document.createElement('div');
var setpn = document.createElement('button');
var setrs = document.createElement('button');
var setrj = document.createElement('button');
var gap = document.createElement('br');
var gap2 = document.createElement('br');
var gap3 = document.createElement('br');
var rule = document.createElement('hr');
var dlt = document.createElement('button');

idsts.id= 'idsts'+i;
idsts.className='idsts';
idp.id= 'idp'+i;
idp.className='idp';
stp.id= 'stp'+i;
stp.className='stp';
ttlp.id = 'ttlp'+i;
ttlp.className = 'ttlp';
nmel.id= 'nmel'+i;
nmel.className= 'nmel';
nmep.id= 'nmep'+i;
nmep.className= 'nmep';
emlp.id= 'emlp'+i;
emlp.className= 'emlp';
desc.id= 'desc'+i;
desc.className= 'desc';
desch.id= 'desch'+i;
desch.className= 'desch';
descp.id= 'descp'+i;
descp.className= 'descp';
btns.id= 'btns'+i;
btns.className = 'btns';
setpn.id= 'setpn'+i;
setpn.className= 'setpn';
setrs.id= 'setrs'+i;
setrs.className= 'setrs';
setrj.id= 'setrj'+i;
setrj.className= 'setrj';
dlt.id= 'dlt'+i;
dlt.className= 'dlt'

idsts.style.cssText = `display: flex;
    text-align: center;
    width: 250px;
    margin-left: 20px;
    margin-right: 20px;`;

    idp.style.cssText = `margin: 10px;
border-radius: 20px;
width: 100px;
display: inline-block;
background-color: #cccccc;`

stp.style.cssText = `margin: 10px;
border-radius: 20px;
width: 150px;
display: inline-block;
background-color: #cccccc;`

iDiv.style.cssText = `height: 250px;
    background-color: white;
    width: 1000px;
     margin-left: 100px;
    margin-top: 20px;    
  border-radius: 20px;`

  ttlp.style.cssText = `margin: 0px;
width: 225px;
display: inline-block;
float:left;
    font-size: large;
`
nmel.style.cssText = `display: flex;
    text-align: center;
    width: 350px;
    margin-left: 20px;
    margin-right: 20px;
    flex: right;
    position: relative;
    left: 500px;
    `;

nmep.style.cssText = `margin: 10px;
margin-right:150px;
width: auto;
padding: 20px;
display: inline-block;
    border: solid black;
border-style: double;
`;    

emlp.style.cssText = `margin: 10px;
width: 100px;
display: inline-block;`;   

desc.style.cssText = `display: flex;
    text-align: center;
    width: 950px;
    margin-left: 20px;
    margin-right: 20px;
    `

    desch.style.cssText = `margin: 10px;
width: 200px;
display: inline-block;`

descp.style.cssText = `margin: 10px;
width: 900px;
display: inline-block;
background-color: #cccccc;`

btns.style.cssText=`display: inline-block;
    text-align: center;
    width: 950px;
    margin-left: auto;
    margin-right: auto;`

    setpn.style.cssText=`width: 150px;
    height:30px;
    display: inline-block;
    margin: 15px;
    margin-left:175px;
    cursor:pointer;
    background-color: yellow;
    `
    setrs.style.cssText=`width: 150px;
    height:30px;
    margin: 15px;
    display: inline-block;
    cursor:pointer;
    background-color: greenyellow;`

    setrj.style.cssText=`width: 150px;
    height: 30px;
    margin: 15px;
    display: inline-block;
    cursor:pointer;
    background-color: red;`

    dlt.style.cssText=`width: 75px;
    height:30px;
    margin-left: 130px;
    display:inline-block;
    background-color: firebrick;
    cursor:pointer;
    `

idp.append('ID: ',data[i].id)
stp.append('Status: ',data[i].status)
ttlp.append(data[i].title)
nmep.append(data[i].name)
emlp.append(data[i].e_mail)
desch.append('Description:')
descp.append(data[i].description)
setpn.append('Set Pending')
setrs.append('Set Resolved')
setrj.append('Set Rejected')
dlt.append('DEL')

    document.getElementById('jsonct').appendChild(iDiv);
    document.getElementById('block'+i).appendChild(idsts);
    document.getElementById('idsts'+i).appendChild(idp);
    document.getElementById('idsts'+i).appendChild(stp);
    document.getElementById('block'+i).appendChild(nmel);
    document.getElementById('nmel'+i).appendChild(nmep);
    document.getElementById('nmel'+i).appendChild(emlp);
    document.getElementById('block'+i).appendChild(ttlp);
    document.getElementById('block'+i).appendChild(gap2);
    document.getElementById('block'+i).appendChild(rule);
    document.getElementById('block'+i).appendChild(desc);
    document.getElementById('desc'+i).appendChild(desch);
    document.getElementById('desc'+i).appendChild(descp);
    document.getElementById('block'+i).appendChild(btns);
    document.getElementById('btns'+i).appendChild(setpn);
    document.getElementById('btns'+i).appendChild(setrs);
    document.getElementById('btns'+i).appendChild(setrj);
    document.getElementById('btns'+i).appendChild(dlt);

(function(pnVal){
        setpn.addEventListener("click", function() {
        fetch(`/complaints/${pnVal}`, {
                method: 'PUT',
                headers: {'Content-type': 'application/json; charset=UTF-8'},
                  body: JSON.stringify({status: "pending"})
            }).then(response => response.json())
            flrJson()
            updateStats();
        }, false);
    })(data[i].id);;

(function(rsVal){
        setrs.addEventListener("click", function() {
        fetch(`/complaints/${rsVal}`, {
                method: 'PUT',
                headers: {'Content-type': 'application/json; charset=UTF-8'},
                  body: JSON.stringify({status: "resolved"})
            }).then(response => response.json())
            flrJson()
            updateStats();
        }, false);
    })(data[i].id);;

(function(rjVal){
        setrj.addEventListener("click", function() {
        fetch(`/complaints/${rjVal}`, {
                method: 'PUT',
                headers: {'Content-type': 'application/json; charset=UTF-8'},
                  body: JSON.stringify({status: "rejected"})
            }).then(response => response.json())
            flrJson()
            updateStats();
        }, false);
    })(data[i].id);;

    (function(dltVal){
        dlt.addEventListener("click", function() {
            // console.log("ID: "+dltVal)
            fetch(`/complaints/${dltVal}`, {
                method: 'DELETE'
            }).then(response => response.json())
            flrJson()
            updateStats();
        }, false);
    })(data[i].id);

    i++;

}


}

async function rnJson(){

            document.getElementById('txtflr').value = ""

     const response = await fetch("/complaints");

                let data = await response.json();

                // console.log(data.length)

const myNode = document.getElementById("jsonct");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }

  let rnFilter = document.getElementById('rnflr').value;

    data = data.filter(c => c.status == rnFilter)

let jsonLen = data.length;
// console.log('length: '+jsonLen)
let i=0;
    console.log('--------- Resolved Filtered Data ---------')

while(i<jsonLen)
{

// console.log(data[i].id)
// console.log(data[i].status)
// console.log(data[i].title)
// console.log(data[i].name)
// console.log(data[i].e_mail)
// console.log(data[i].description)

var iDiv = document.createElement('div');

    iDiv.id = 'block'+i;
    iDiv.className = 'block';

var idsts = document.createElement('div');
var idp = document.createElement('p');
var stp = document.createElement('p');
var ttlp = document.createElement('div');
var nmel = document.createElement('div');
var nmep = document.createElement('p');
var emlp = document.createElement('p');
var desc = document.createElement('div');
var desch = document.createElement('h3');
var descp = document.createElement('p');
var btns = document.createElement('div');
var setpn = document.createElement('button');
var setrs = document.createElement('button');
var setrj = document.createElement('button');
var gap = document.createElement('br');
var gap2 = document.createElement('br');
var gap3 = document.createElement('br');
var rule = document.createElement('hr');
var dlt = document.createElement('button');

idsts.id= 'idsts'+i;
idsts.className='idsts';
idp.id= 'idp'+i;
idp.className='idp';
stp.id= 'stp'+i;
stp.className='stp';
ttlp.id = 'ttlp'+i;
ttlp.className = 'ttlp';
nmel.id= 'nmel'+i;
nmel.className= 'nmel';
nmep.id= 'nmep'+i;
nmep.className= 'nmep';
emlp.id= 'emlp'+i;
emlp.className= 'emlp';
desc.id= 'desc'+i;
desc.className= 'desc';
desch.id= 'desch'+i;
desch.className= 'desch';
descp.id= 'descp'+i;
descp.className= 'descp';
btns.id= 'btns'+i;
btns.className = 'btns';
setpn.id= 'setpn'+i;
setpn.className= 'setpn';
setrs.id= 'setrs'+i;
setrs.className= 'setrs';
setrj.id= 'setrj'+i;
setrj.className= 'setrj';
dlt.id= 'dlt'+i;
dlt.className= 'dlt'

idsts.style.cssText = `display: flex;
    text-align: center;
    width: 250px;
    margin-left: 20px;
    margin-right: 20px;`;

    idp.style.cssText = `margin: 10px;
border-radius: 20px;
width: 100px;
display: inline-block;
background-color: #cccccc;`

stp.style.cssText = `margin: 10px;
border-radius: 20px;
width: 150px;
display: inline-block;
background-color: #cccccc;`

iDiv.style.cssText = `height: 250px;
    background-color: white;
    width: 1000px;
     margin-left: 100px;
    margin-top: 20px;    
  border-radius: 20px;`

  ttlp.style.cssText = `margin: 0px;
width: 225px;
display: inline-block;
float:left;
    font-size: large;
`
nmel.style.cssText = `display: flex;
    text-align: center;
    width: 350px;
    margin-left: 20px;
    margin-right: 20px;
    flex: right;
    position: relative;
    left: 500px;
    `;

nmep.style.cssText = `margin: 10px;
margin-right:150px;
width: auto;
padding: 20px;
display: inline-block;
    border: solid black;
border-style: double;
`;    

emlp.style.cssText = `margin: 10px;
width: 100px;
display: inline-block;`;   

desc.style.cssText = `display: flex;
    text-align: center;
    width: 950px;
    margin-left: 20px;
    margin-right: 20px;
    `

    desch.style.cssText = `margin: 10px;
width: 200px;
display: inline-block;`

descp.style.cssText = `margin: 10px;
width: 900px;
display: inline-block;
background-color: #cccccc;`

btns.style.cssText=`display: inline-block;
    text-align: center;
    width: 950px;
    margin-left: auto;
    margin-right: auto;`

    setpn.style.cssText=`width: 150px;
    height:30px;
    display: inline-block;
    margin: 15px;
    margin-left:175px;
    cursor:pointer;
    background-color: yellow;
    `
    setrs.style.cssText=`width: 150px;
    height:30px;
    margin: 15px;
    display: inline-block;
    cursor:pointer;
    background-color: greenyellow;`

    setrj.style.cssText=`width: 150px;
    height: 30px;
    margin: 15px;
    display: inline-block;
    cursor:pointer;
    background-color: red;`

    dlt.style.cssText=`width: 75px;
    height:30px;
    margin-left: 130px;
    display:inline-block;
    background-color: firebrick;
    cursor:pointer;
    `

idp.append('ID: ',data[i].id)
stp.append('Status: ',data[i].status)
ttlp.append(data[i].title)
nmep.append(data[i].name)
emlp.append(data[i].e_mail)
desch.append('Description:')
descp.append(data[i].description)
setpn.append('Set Pending')
setrs.append('Set Resolved')
setrj.append('Set Rejected')
dlt.append('DEL')

    document.getElementById('jsonct').appendChild(iDiv);
    document.getElementById('block'+i).appendChild(idsts);
    document.getElementById('idsts'+i).appendChild(idp);
    document.getElementById('idsts'+i).appendChild(stp);
    document.getElementById('block'+i).appendChild(nmel);
    document.getElementById('nmel'+i).appendChild(nmep);
    document.getElementById('nmel'+i).appendChild(emlp);
    document.getElementById('block'+i).appendChild(ttlp);
    document.getElementById('block'+i).appendChild(gap2);
    document.getElementById('block'+i).appendChild(rule);
    document.getElementById('block'+i).appendChild(desc);
    document.getElementById('desc'+i).appendChild(desch);
    document.getElementById('desc'+i).appendChild(descp);
    document.getElementById('block'+i).appendChild(btns);
    document.getElementById('btns'+i).appendChild(setpn);
    document.getElementById('btns'+i).appendChild(setrs);
    document.getElementById('btns'+i).appendChild(setrj);
    document.getElementById('btns'+i).appendChild(dlt);

(function(pnVal){
        setpn.addEventListener("click", function() {
        fetch(`/complaints/${pnVal}`, {
                method: 'PUT',
                headers: {'Content-type': 'application/json; charset=UTF-8'},
                  body: JSON.stringify({status: "pending"})
            }).then(response => response.json())
            document.getElementById('rnflr').click()
            updateStats();
        }, false);
    })(data[i].id);;

(function(rsVal){
        setrs.addEventListener("click", function() {
        fetch(`/complaints/${rsVal}`, {
                method: 'PUT',
                headers: {'Content-type': 'application/json; charset=UTF-8'},
                  body: JSON.stringify({status: "resolved"})
            }).then(response => response.json())
            document.getElementById('rnflr').click()
            updateStats();
        }, false);
    })(data[i].id);;

(function(rjVal){
        setrj.addEventListener("click", function() {
        fetch(`/complaints/${rjVal}`, {
                method: 'PUT',
                headers: {'Content-type': 'application/json; charset=UTF-8'},
                  body: JSON.stringify({status: "rejected"})
            }).then(response => response.json())
            document.getElementById('rnflr').click()
            updateStats();
        }, false);
    })(data[i].id);;

    (function(dltVal){
        dlt.addEventListener("click", function() {
            // console.log("ID: "+dltVal)
            fetch(`/complaints/${dltVal}`, {
                method: 'DELETE'
            }).then(response => response.json())
            document.getElementById('rnflr').click()
            updateStats();
        }, false);
    })(data[i].id);

    i++;

}

}

async function rjJson(){

            document.getElementById('txtflr').value = ""

     const response = await fetch("/complaints");

                let data = await response.json();

                // console.log(data.length)

const myNode = document.getElementById("jsonct");

  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }

  let rjFilter = document.getElementById('rjflr').value;

    data = data.filter(c => c.status == rjFilter)

let jsonLen = data.length;
// console.log('length: '+jsonLen)

    console.log('--------- Rejected Filtered Data ---------')

let i=0;

while(i<jsonLen)
{

// console.log(data[i].id)
// console.log(data[i].status)
// console.log(data[i].title)
// console.log(data[i].name)
// console.log(data[i].e_mail)
// console.log(data[i].description)

var iDiv = document.createElement('div');

    iDiv.id = 'block'+i;
    iDiv.className = 'block';

var idsts = document.createElement('div');
var idp = document.createElement('p');
var stp = document.createElement('p');
var ttlp = document.createElement('div');
var nmel = document.createElement('div');
var nmep = document.createElement('p');
var emlp = document.createElement('p');
var desc = document.createElement('div');
var desch = document.createElement('h3');
var descp = document.createElement('p');
var btns = document.createElement('div');
var setpn = document.createElement('button');
var setrs = document.createElement('button');
var setrj = document.createElement('button');
var gap = document.createElement('br');
var gap2 = document.createElement('br');
var gap3 = document.createElement('br');
var rule = document.createElement('hr');
var dlt = document.createElement('button');

idsts.id= 'idsts'+i;
idsts.className='idsts';
idp.id= 'idp'+i;
idp.className='idp';
stp.id= 'stp'+i;
stp.className='stp';
ttlp.id = 'ttlp'+i;
ttlp.className = 'ttlp';
nmel.id= 'nmel'+i;
nmel.className= 'nmel';
nmep.id= 'nmep'+i;
nmep.className= 'nmep';
emlp.id= 'emlp'+i;
emlp.className= 'emlp';
desc.id= 'desc'+i;
desc.className= 'desc';
desch.id= 'desch'+i;
desch.className= 'desch';
descp.id= 'descp'+i;
descp.className= 'descp';
btns.id= 'btns'+i;
btns.className = 'btns';
setpn.id= 'setpn'+i;
setpn.className= 'setpn';
setrs.id= 'setrs'+i;
setrs.className= 'setrs';
setrj.id= 'setrj'+i;
setrj.className= 'setrj';
dlt.id= 'dlt'+i;
dlt.className= 'dlt'

idsts.style.cssText = `display: flex;
    text-align: center;
    width: 250px;
    margin-left: 20px;
    margin-right: 20px;`;

    idp.style.cssText = `margin: 10px;
border-radius: 20px;
width: 100px;
display: inline-block;
background-color: #cccccc;`

stp.style.cssText = `margin: 10px;
border-radius: 20px;
width: 150px;
display: inline-block;
background-color: #cccccc;`

iDiv.style.cssText = `height: 250px;
    background-color: white;
    width: 1000px;
     margin-left: 100px;
    margin-top: 20px;    
  border-radius: 20px;`

  ttlp.style.cssText = `margin: 0px;
width: 225px;
display: inline-block;
float:left;
    font-size: large;
`
nmel.style.cssText = `display: flex;
    text-align: center;
    width: 350px;
    margin-left: 20px;
    margin-right: 20px;
    flex: right;
    position: relative;
    left: 500px;
    `;

nmep.style.cssText = `margin: 10px;
margin-right:150px;
width: auto;
padding: 20px;
display: inline-block;
    border: solid black;
border-style: double;
`;    

emlp.style.cssText = `margin: 10px;
width: 100px;
display: inline-block;`;   

desc.style.cssText = `display: flex;
    text-align: center;
    width: 950px;
    margin-left: 20px;
    margin-right: 20px;
    `

    desch.style.cssText = `margin: 10px;
width: 200px;
display: inline-block;`

descp.style.cssText = `margin: 10px;
width: 900px;
display: inline-block;
background-color: #cccccc;`

btns.style.cssText=`display: inline-block;
    text-align: center;
    width: 950px;
    margin-left: auto;
    margin-right: auto;`

    setpn.style.cssText=`width: 150px;
    height:30px;
    display: inline-block;
    margin: 15px;
    margin-left:175px;
    cursor:pointer;
    background-color: yellow;
    `
    setrs.style.cssText=`width: 150px;
    height:30px;
    margin: 15px;
    display: inline-block;
    cursor:pointer;
    background-color: greenyellow;`

    setrj.style.cssText=`width: 150px;
    height: 30px;
    margin: 15px;
    display: inline-block;
    cursor:pointer;
    background-color: red;`

    dlt.style.cssText=`width: 75px;
    height:30px;
    margin-left: 130px;
    display:inline-block;
    background-color: firebrick;
    cursor:pointer;
    `

idp.append('ID: ',data[i].id)
stp.append('Status: ',data[i].status)
ttlp.append(data[i].title)
nmep.append(data[i].name)
emlp.append(data[i].e_mail)
desch.append('Description:')
descp.append(data[i].description)
setpn.append('Set Pending')
setrs.append('Set Resolved')
setrj.append('Set Rejected')
dlt.append('DEL')

    document.getElementById('jsonct').appendChild(iDiv);
    document.getElementById('block'+i).appendChild(idsts);
    document.getElementById('idsts'+i).appendChild(idp);
    document.getElementById('idsts'+i).appendChild(stp);
    document.getElementById('block'+i).appendChild(nmel);
    document.getElementById('nmel'+i).appendChild(nmep);
    document.getElementById('nmel'+i).appendChild(emlp);
    document.getElementById('block'+i).appendChild(ttlp);
    document.getElementById('block'+i).appendChild(gap2);
    document.getElementById('block'+i).appendChild(rule);
    document.getElementById('block'+i).appendChild(desc);
    document.getElementById('desc'+i).appendChild(desch);
    document.getElementById('desc'+i).appendChild(descp);
    document.getElementById('block'+i).appendChild(btns);
    document.getElementById('btns'+i).appendChild(setpn);
    document.getElementById('btns'+i).appendChild(setrs);
    document.getElementById('btns'+i).appendChild(setrj);
    document.getElementById('btns'+i).appendChild(dlt);

(function(pnVal){
        setpn.addEventListener("click", function() {
        fetch(`/complaints/${pnVal}`, {
                method: 'PUT',
                headers: {'Content-type': 'application/json; charset=UTF-8'},
                  body: JSON.stringify({status: "pending"})
            }).then(response => response.json())
            document.getElementById('rjflr').click()
            updateStats();
        }, false);
    })(data[i].id);;

(function(rsVal){
        setrs.addEventListener("click", function() {
        fetch(`/complaints/${rsVal}`, {
                method: 'PUT',
                headers: {'Content-type': 'application/json; charset=UTF-8'},
                  body: JSON.stringify({status: "resolved"})
            }).then(response => response.json())
            document.getElementById('rjflr').click()
            updateStats();
        }, false);
    })(data[i].id);;

(function(rjVal){
        setrj.addEventListener("click", function() {
        fetch(`/complaints/${rjVal}`, {
                method: 'PUT',
                headers: {'Content-type': 'application/json; charset=UTF-8'},
                  body: JSON.stringify({status: "rejected"})
            }).then(response => response.json())
            document.getElementById('rjflr').click()
            updateStats();
        }, false);
    })(data[i].id);;

    (function(dltVal){
        dlt.addEventListener("click", function() {
            // console.log("ID: "+dltVal)
            fetch(`/complaints/${dltVal}`, {
                method: 'DELETE'
            }).then(response => response.json())
            document.getElementById('rjflr').click()
            updateStats();
        }, false);
    })(data[i].id);

    i++;

}

}

async function pnJson(){

            document.getElementById('txtflr').value = ""

     const response = await fetch("/complaints");

                let data = await response.json();

                // console.log(data.length)

const myNode = document.getElementById("jsonct");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }

  let pnFilter = document.getElementById('pnflr').value;

    data = data.filter(c => c.status == pnFilter)

let jsonLen = data.length;
// console.log('length: '+jsonLen)
    console.log('--------- Pending Filtered Data ---------')

let i=0;

while(i<jsonLen)
{

// console.log(data[i].id)
// console.log(data[i].status)
// console.log(data[i].title)
// console.log(data[i].name)
// console.log(data[i].e_mail)
// console.log(data[i].description)

var iDiv = document.createElement('div');

    iDiv.id = 'block'+i;
    iDiv.className = 'block';

var idsts = document.createElement('div');
var idp = document.createElement('p');
var stp = document.createElement('p');
var ttlp = document.createElement('div');
var nmel = document.createElement('div');
var nmep = document.createElement('p');
var emlp = document.createElement('p');
var desc = document.createElement('div');
var desch = document.createElement('h3');
var descp = document.createElement('p');
var btns = document.createElement('div');
var setpn = document.createElement('button');
var setrs = document.createElement('button');
var setrj = document.createElement('button');
var gap = document.createElement('br');
var gap2 = document.createElement('br');
var gap3 = document.createElement('br');
var rule = document.createElement('hr');
var dlt = document.createElement('button');

idsts.id= 'idsts'+i;
idsts.className='idsts';
idp.id= 'idp'+i;
idp.className='idp';
stp.id= 'stp'+i;
stp.className='stp';
ttlp.id = 'ttlp'+i;
ttlp.className = 'ttlp';
nmel.id= 'nmel'+i;
nmel.className= 'nmel';
nmep.id= 'nmep'+i;
nmep.className= 'nmep';
emlp.id= 'emlp'+i;
emlp.className= 'emlp';
desc.id= 'desc'+i;
desc.className= 'desc';
desch.id= 'desch'+i;
desch.className= 'desch';
descp.id= 'descp'+i;
descp.className= 'descp';
btns.id= 'btns'+i;
btns.className = 'btns';
setpn.id= 'setpn'+i;
setpn.className= 'setpn';
setrs.id= 'setrs'+i;
setrs.className= 'setrs';
setrj.id= 'setrj'+i;
setrj.className= 'setrj';
dlt.id= 'dlt'+i;
dlt.className= 'dlt'

idsts.style.cssText = `display: flex;
    text-align: center;
    width: 250px;
    margin-left: 20px;
    margin-right: 20px;`;

    idp.style.cssText = `margin: 10px;
border-radius: 20px;
width: 100px;
display: inline-block;
background-color: #cccccc;`

stp.style.cssText = `margin: 10px;
border-radius: 20px;
width: 150px;
display: inline-block;
background-color: #cccccc;`

iDiv.style.cssText = `height: 250px;
    background-color: white;
    width: 1000px;
     margin-left: 100px;
    margin-top: 20px;    
  border-radius: 20px;`

  ttlp.style.cssText = `margin: 0px;
width: 225px;
display: inline-block;
float:left;
    font-size: large;
`
nmel.style.cssText = `display: flex;
    text-align: center;
    width: 350px;
    margin-left: 20px;
    margin-right: 20px;
    flex: right;
    position: relative;
    left: 500px;
    `;

nmep.style.cssText = `margin: 10px;
margin-right:150px;
width: auto;
padding: 20px;
display: inline-block;
    border: solid black;
border-style: double;
`;    

emlp.style.cssText = `margin: 10px;
width: 100px;
display: inline-block;`;   

desc.style.cssText = `display: flex;
    text-align: center;
    width: 950px;
    margin-left: 20px;
    margin-right: 20px;
    `

    desch.style.cssText = `margin: 10px;
width: 200px;
display: inline-block;`

descp.style.cssText = `margin: 10px;
width: 900px;
display: inline-block;
background-color: #cccccc;`

btns.style.cssText=`display: inline-block;
    text-align: center;
    width: 950px;
    margin-left: auto;
    margin-right: auto;`

    setpn.style.cssText=`width: 150px;
    height:30px;
    display: inline-block;
    margin: 15px;
    margin-left:175px;
    cursor:pointer;
    background-color: yellow;
    `
    setrs.style.cssText=`width: 150px;
    height:30px;
    margin: 15px;
    display: inline-block;
    cursor:pointer;
    background-color: greenyellow;`

    setrj.style.cssText=`width: 150px;
    height: 30px;
    margin: 15px;
    display: inline-block;
    cursor:pointer;
    background-color: red;`

    dlt.style.cssText=`width: 75px;
    height:30px;
    margin-left: 130px;
    display:inline-block;
    background-color: firebrick;
    cursor:pointer;
    `

idp.append('ID: ',data[i].id)
stp.append('Status: ',data[i].status)
ttlp.append(data[i].title)
nmep.append(data[i].name)
emlp.append(data[i].e_mail)
desch.append('Description:')
descp.append(data[i].description)
setpn.append('Set Pending')
setrs.append('Set Resolved')
setrj.append('Set Rejected')
dlt.append('DEL')

    document.getElementById('jsonct').appendChild(iDiv);
    document.getElementById('block'+i).appendChild(idsts);
    document.getElementById('idsts'+i).appendChild(idp);
    document.getElementById('idsts'+i).appendChild(stp);
    document.getElementById('block'+i).appendChild(nmel);
    document.getElementById('nmel'+i).appendChild(nmep);
    document.getElementById('nmel'+i).appendChild(emlp);
    document.getElementById('block'+i).appendChild(ttlp);
    document.getElementById('block'+i).appendChild(gap2);
    document.getElementById('block'+i).appendChild(rule);
    document.getElementById('block'+i).appendChild(desc);
    document.getElementById('desc'+i).appendChild(desch);
    document.getElementById('desc'+i).appendChild(descp);
    document.getElementById('block'+i).appendChild(btns);
    document.getElementById('btns'+i).appendChild(setpn);
    document.getElementById('btns'+i).appendChild(setrs);
    document.getElementById('btns'+i).appendChild(setrj);
    document.getElementById('btns'+i).appendChild(dlt);

(function(pnVal){
        setpn.addEventListener("click", function() {
        fetch(`/complaints/${pnVal}`, {
                method: 'PUT',
                headers: {'Content-type': 'application/json; charset=UTF-8'},
                  body: JSON.stringify({status: "pending"})
            }).then(response => response.json())
            document.getElementById('pnflr').click()
            updateStats();
        }, false);
    })(data[i].id);;

(function(rsVal){
        setrs.addEventListener("click", function() {
        fetch(`/complaints/${rsVal}`, {
                method: 'PUT',
                headers: {'Content-type': 'application/json; charset=UTF-8'},
                  body: JSON.stringify({status: "resolved"})
            }).then(response => response.json())
            document.getElementById('pnflr').click()
            updateStats();
        }, false);
    })(data[i].id);;

(function(rjVal){
        setrj.addEventListener("click", function() {
        fetch(`/complaints/${rjVal}`, {
                method: 'PUT',
                headers: {'Content-type': 'application/json; charset=UTF-8'},
                  body: JSON.stringify({status: "rejected"})
            }).then(response => response.json())
            document.getElementById('pnflr').click()
            updateStats();
        }, false);
    })(data[i].id);;

    (function(dltVal){
        dlt.addEventListener("click", function() {
            // console.log("ID: "+dltVal)
            fetch(`/complaints/${dltVal}`, {
                method: 'DELETE'
            }).then(response => response.json())
            document.getElementById('pnflr').click()
            updateStats();
        }, false);
    })(data[i].id);

    i++;

}

}

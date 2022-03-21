const url = 'https://www.php.engenius.com.co/DatabaseIE.php'

// CASO 1
fetch (url, {
    method: 'POST',
    body: JSON.stringify({
        User: 'etr', 
        Password: '111111111', 
        option: 'instituciones'
    }),
    headers: {'Content-Type': 'application/json'}
})
.then(res => res.json())
.then(datos => console.log(datos));

// CASO 2
fetch (url, {
    method: 'POST',
    body: JSON.stringify({
        User: 'etraining',
        Password: 'explorandoando2020%',
        option: 'institucion'
    }),
    headers: {'Content-Type': 'application/json'}
})
.then(res2 => res2.json())
.then(datos2 => console.log(datos2));

//CASO 3
fetch (url, {
    method: 'POST',
    body: JSON.stringify({
        User: 'etraining',
        Password: 'explorandoando2020%',
        option: 'municipios'
    }),
    headers: {'Content-Type': 'application/json'}
})
.then(res3 => res3.json())
.then(datos3 => console.log(datos3));

//  CASO 3 METODO AJAX ARRAY MUNICIPIOS TOLIMA
let datos4 = {
    User: 'etraining', 
    Password: 'explorandoando2020%', 
    option: 'municipios'
}

let post = JSON.stringify(datos4);

let xhr= new XMLHttpRequest();

xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(post);

xhr.onload = function () {
    if (xhr.readyState == 4 && this.status ==200) {
        let datas = JSON.parse(this.responseText);
        console.log(datas.data);

        let reshtml1 = document.querySelector('#res3');
        reshtml1.innerHTML = '';
        
        for (const i of datas.data) {
            //console.log(i);
            reshtml1.innerHTML +=`
            <tr>
                <td>${i.nombre}</td>
                <td>${i.dane}</td>
            </tr>
            `
        }
        
    }
}    

// CASO 4
let datos5 = {
    User: 'etraining', 
    Password: 'explorandoando2020%', 
    option: 'instituciones', 
    CodMun: '73168'
}

let post2 = JSON.stringify(datos5);

let xhr2= new XMLHttpRequest();

xhr2.open('POST', url, true);
xhr2.setRequestHeader('Content-Type', 'application/json');
xhr2.send(post2);

xhr2.onload = function () {
    if (xhr2.readyState == 4 && this.status == 200) {
        let datas2 = JSON.parse(this.responseText);
        console.log(datas2)
        console.log(datas2.data);

        let reshtml1 = document.querySelector('#res4');
        reshtml1.innerHTML = '';
        
        for (const i of datas2.data) {
            console.log(i);
            reshtml1.innerHTML +=`
            <tr>
                <td>${i.nombre}</td>
                <td>${i.dane}</td>
            </tr>
            `
        }
        
    }
}

//CASO 5
let datos6 = {
    User: 'etraining', 
    Password: 'explorandoando2020%', 
    option: 'sedes', 
    CodInst: '273168002111'
}

let post3 = JSON.stringify(datos6);

let xhr3= new XMLHttpRequest();

xhr3.open('POST', url, true);
xhr3.setRequestHeader('Content-Type', 'application/json');
xhr3.send(post3);

xhr3.onload = function () {
    if (xhr3.readyState == 4 && this.status == 200) {
        let datas3 = JSON.parse(this.responseText);
        console.log(datas3);
        console.log(datas3.data);
        
        let reshtml1 = document.querySelector('#res5');
        reshtml1.innerHTML = '';
        
        for (const i of datas3.data) {
            console.log(i);
            reshtml1.innerHTML +=`
            <tr>
                <td>${i.nombre}</td>
                <td>${i.dane}</td>
            </tr>
            `
        }
    }
}

//CASO 6

let datos7 = {
    User: 'etraining', Password: 'explorandoando2020%', 
    option: 'grupos', 
    CodSede: ' 273268001201'
}

let post4 = JSON.stringify(datos7);

let xhr4= new XMLHttpRequest();

xhr4.open('POST', url, true);
xhr4.setRequestHeader('Content-Type', 'application/json');
xhr4.send(post4);

xhr4.onload = function () {
    if (xhr4.readyState == 4 && this.status == 200) {
        let datas4 = JSON.parse(this.responseText);
        console.log(datas4);
        // NO HAY DATOS EN EL ARRAY data:

        // console.log(datas4.data);
        
        // for (const iterator of datas4.data) {
        //     console.log(iterator);
        // }
    }
}

//CASO 7

let datos8 = {
    User: 'etraining', 
    Password: 'explorandoando2020%', 
    option: 'infoGrupo', 
    IdGrupo: '10028'
}

let post5 = JSON.stringify(datos8);
let xhr5 = new XMLHttpRequest();

xhr5.open('POST', url, true);
xhr5.setRequestHeader('Content-Type', 'application/json');
xhr5.send(post5);

xhr5.onload = function () {
    if (xhr5.readyState == 4 && this.status == 200) {
        let datas5 = JSON.parse(this.responseText);
        console.log(datas5);

        let reshtml = document.querySelector('#res7');
        reshtml.innerHTML = '';

        console.log(datas5.data);
        for (const i of datas5.data) {
            console.log(i);
            reshtml.innerHTML +=`
                <p>${i.id}</p>
                <p>${i.nombre}</p>
                <p>${i.sede}</p>
                <p>${i.institución}</p>
                <p>${i.municipio}</p>
                <p>${i.numGrupo}</p>
            `
        }
    }   
}
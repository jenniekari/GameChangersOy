var myObj, myJSON, i, k=0, c=0, x="";

myJSON = '{"workers":[{"worker":"CEO","name":"Sanni Karjalainen","email":"sanni@smileoy.fi"},' +
'{"worker":"Front-End Developer","name":"Anssi Karjalainen","email":"anssi@smileoy.fi"},' +
'{"worker":"Back-End Developer","name":"Maija Black","email":"maija@smileoy.fi"},' +
'{"worker":"Back-End Developer","name":"Genevie Bolck","email":"genevie@smileoy.fi"},' +
'{"worker":"Customer Service","name":"Matti Karma","email":"matti@smileoy.fi"},' +
'{"worker":"Customer Service","name":"Veera Kuntonen","email":"veera@smileoy.fi"}]}';

//muunnetaan JSON-objekti JavaScript-objektiksi JSON-parse()-komennolla
myObj = JSON.parse(myJSON);

//luodaan funktion sisälle table, jossa työntekijät, työnimikkeet ja sähköpostit
function tuoLuettelo(){
    //x-muuttujaan rakennetaan HTML-koodisto, jossa sekä taulukon ohjaustägejä, että myObj:ssa olevaa dataa
    x = "<table><tr><th>Asema</th><th>Nimi</th><th>Sähköposti</th></tr>";
    for (i in myObj.workers){
        x += "<tr><td class='employeesAll'>" + myObj.workers[i].worker + "</td>";
        x += "<td>" + myObj.workers[i].name + "</td>";
        x += "<td>" + myObj.workers[i].email + "</td></tr>";
    }
    x += "</table"; //taulukon lopetus
    document.getElementById("employees").innerHTML = x;
};

//Funktio käy läpi kaikki ne HTML -elementit, joiden koodissa on määritys class="employeesAll"
function tarkistaEmployee(employee){
    let result="0";
    var empl = document.getElementsByClassName("employeesAll");
    for(var i=0; i < empl.length; i++){ //silmukka käsittelee kaikki kohteena olevat elementit
        if (employee == empl[i].innerText){
            result="1";
        }
    }
    return result;
};

//tuo varattu työnimikkeet
function tuoEmployees() {
    /*
    if (k> myObj.workers.length-1) { //tutkitaan onko kaikki jo tulostettu, jos on, annetaan ilmoitus
        alert("Kaikki käsitelty");
    }
    for (c in myObj.workers){
        var oliEnnestään2 = tarkistaEmployee(myObj.workers[c].worker)
        if (oliEnnestään2=="0") {
            let kohdeElementti = document.createElement("li"); //luodaan listaobjekti
            let emp = document.createTextNode(myObj.workers[k].worker); //sijoitetaan workern nimi emp-muuttujaan
            kohdeElementti.appendChild(emp); //lisätään työntekijän nimi seuraavaksi listalle
            document.getElementById("employeeList").appendChild(kohdeElementti); //viedään työntekijä HTML-sivulle kohtaan "empoloyeeList"
            k++; //kasvatetaan myObj-taulukon indeksiä
        }
    }
    }
    */
    if (k > myObj.workers.length-1) { //tutkitaan onko kaikki jo tulostettu, jos on, annetaan ilmoitus
        alert("Kaikki käsitelty");
    }
    for (k in myObj.workers) { //käsitellään kaikki JavaObjektissa myObj olevat rivit ja lisätään puuttuva nimike sivulle
        var oliEnnestään2 = tarkistaEmployee(myObj.workers[k].worker)
        if (oliEnnestään2=="0") { //Jos kohdetta ei vielä ole, se luodaan sivulle
            let kohdeElementti = document.createElement("h3"); //luodaan otsikko3 -objekti
            let nimike = document.createElement("p"); //luodaan tekstiobjekti
            nimike.className="employeesAll"; //määritellään class=employeeAll (jotta voidaan myöhemmin tutkia getElementsByClassName -metodilla onko kohdetta jo olemassa)
            nimike.href=myObj.workers[k].worker; //määritellään mihin p-tägi viittaa
            let data = document.createTextNode(myObj.workers[k].worker); //sijoitetaan työntekijöiden työnimike tekstiksi
            nimike.appendChild(data); //lisätään työntekijöiden työnimike tekstinoodi ylemmän tason elementin lapsielementiksi
            kohdeElementti.appendChild(nimike);  //lisätään otsikkoelementtiin linkkielementti
            document.getElementById("employeeList").appendChild(kohdeElementti); //viedään työnimike-lista HTML-sivulle kohtaan "employeeList"
        }
        k++;
    }  
};

//tuo työntekijöiden sähköpostit
function tuoEmail(){
    for (k in myObj.workers) {//käsitellään kaikki JavaObjektissa myObj olevat rivit ja lisätään puuttuva sähköposti sivulle
        var oliEnnestään = tarkistaEmployee(myObj.workers[k].email);
        if (oliEnnestään=="0") {  //Jos linkkiä ei vielä ole, se luodaan sivulle
            let otsikkoElementti = document.createElement("h3"); //luodaan otsikko3 -objekti
            let email = document.createElement("a"); //luodaan linkkiobjekti. a tarkoittaa linkkiä.
            email.className="employeesAll"; //määritellään class=employeeAll (jotta voidaan myöhemmin tutkia getElementsByClassName -metodilla onko sposti jo olemassa)
            email.href=myObj.workers[k].email; //määritellään mihin a-linkkitägi viittaa
            email.target="_blank";  //määritellään, että kohde avataan uuteen sivuun. target blank tarkoittaa, että avataan uuteen ikkunaan
            let data = document.createTextNode(myObj.workers[k].email); //sijoitetaan työntekijöiden sähköposti tekstiksi
            email.appendChild(data); //lisätään työntekijöiden sähköposti tekstinoodi ylemmän tason elementin lapsielementiksi
            otsikkoElementti.appendChild(email);  //lisätään otsikkoelementtiin linkkielementti
            document.getElementById("emails").appendChild(otsikkoElementti); //viedään sähköpostit HTML-sivulle kohtaan "emails"
        }
    }
};

var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";
};

function hideMenu(){
    navLinks.style.right = "-200px";
}
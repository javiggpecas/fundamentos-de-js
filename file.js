/** Cambio de titulo de noticias */
const links = document.getElementsByClassName('navigation-link');
const titleNew = document.getElementById('title-new');
for (let i = 0; i < links.length; i++) {
    const link = links[i];
    link.addEventListener('click', event => {
        event.preventDefault();
        titleNew.innerHTML = 'Mi Noticia ' + (i+1);
    })
}

/** Añadir linea a tabla a traves de los datos del formulario */
const formulario = document.getElementById("formulario");
formulario.addEventListener('submit', event => {
    event.preventDefault();
    const user = formulario.elements['name'];
    const surname = formulario.elements['surname'];
    const telephone = formulario.elements['telephone'];
    const numberIdentityCard = formulario.elements['numberIdentityCard'];
    const sports = formulario.elements['sports'];
    const tableRef = document.getElementById('tableMolona').getElementsByTagName('tbody')[0];
    let sportsChecked = '';
    for (let i = 0; i < sports.length; i++) {
        const sport = sports[i];
        if (sport.checked) {
            if (sportsChecked === '') {
                sportsChecked = sport.value;
            } else {
                sportsChecked += ', ' + sport.value;
            }
        }
    }
    if (user.value !== '' && surname.value !== '' && telephone.value !== '' && numberIdentityCard.value !== '') {
        const newRow = tableRef.insertRow();
        let cell0 = newRow.insertCell(0);
        let cell1 = newRow.insertCell(1);
        let cell2 = newRow.insertCell(2);
        let cell3 = newRow.insertCell(3);
        let cell4 = newRow.insertCell(4);
        cell0.appendChild(document.createTextNode(user.value.trim()));
        cell1.appendChild(document.createTextNode(surname.value.trim()));
        cell2.appendChild(document.createTextNode(telephone.value.trim()));
        cell3.appendChild(document.createTextNode(numberIdentityCard.value.trim()));
        cell4.appendChild(document.createTextNode(sportsChecked));
    }
})

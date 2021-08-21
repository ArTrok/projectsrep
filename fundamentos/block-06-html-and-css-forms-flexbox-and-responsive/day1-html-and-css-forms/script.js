let states = 
['Acre',
'Alagoas',
'Amapá',
'Ceará',
'Espírito Santo',
'Goiás', 'Maranhão', 
'Mato Grosso', 
'Mato Grosso do Sul', 
'Minas Gerais', 
'Pará', 
'Paraíba', 
'Pernambuco', 
'Piauí', 
'Rio de Janeiro', 
'Rio Grande do Norte',
'Rio Grande do Sul',
'Rondônia', 'Roraima', 
'Santa Catarina', 
'São Paulo', 
'Sergipe', 
'Tocantins']

function insertStates() {
    
    for (let index = 0; index < states.length; index += 1) {
        let select = document.getElementById('states');
        let inserted = document.createElement('option');
        select.appendChild(inserted).innerText = states[index];
        select.appendChild(inserted).value = states[index];        
    }
}

window.onload = function() {
    insertStates()}
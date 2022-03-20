function valor(onclick){
    let valorInicial = document.getElementById('input')
    let valorMonetario = valorInicial.value;
    let taxa = 5.02; 
    let valorTotal = valorMonetario*taxa;
    alert('O valor em dólar de '+ valorMonetario +' dólares corresponde a ' + valorTotal.toFixed(2) + ' reais');  
    document.getElementById('input').value='';
}

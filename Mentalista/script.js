let random = Math.floor(Math.random() * 10 + 1)
console.log(random);

function clique(){
    let valor = document.getElementById('texto').value;
    if (random == valor) {
        console.log('Parabéns! Você acertou!!');
    } else {
        console.log('Número errado. Tente novamente :)');
    }
    document.getElementById('texto').value='';
}
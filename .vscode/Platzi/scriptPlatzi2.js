
const h1 = document.querySelector('h1');
const input1= document.querySelector('#Calculo1');
const input2= document.querySelector('#Calculo2');
const btn= document.querySelector('#btnCalcular');
const pResult = document.querySelector('#Result');

function BtnOnClick() {
    const sumaInputs = (+input1.value) + (+input2.value);
    pResult.innerText = 'Resultado: ' + sumaInputs;

}




















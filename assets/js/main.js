const form = document.querySelector('#form'); //ok
form.addEventListener('submit', function(e){ //ok
  e.preventDefault(); //ok
  const inputweight = e.target.querySelector('#weight'); //ok
  const inputheight = e.target.querySelector('#height'); //ok

  const peso = Number(inputweight.value); //ok
  const altura = Number(inputheight.value); //ok
 
  
  if(!peso) {
    setResultado('peso invalido', false); //ok
    return; 
    }
  if(!altura) {
    setResultado('altura invalida', false);//ok
    return;
    }

  const bmi = getBmi(peso , altura); //ok
  const nivelBmi = getNivelBMI(bmi); //ok

  const msg = `your Bmi is  ${bmi} (${nivelBmi}).`;

  setResultado(msg,true);

});

function getBmi(peso, altura){
  const bmi = peso / altura ** 2;
  return bmi.toFixed(2);
}
function getNivelBMI (bmi){
  const nivel = ['Abaixo do peso', 'peso normal', 'sobrepeso', 'obesidade grau 1',
  'obesidade grau 2','obesidade grau 3'];
  if (bmi >= 39.9) return nivel [5];
  if (bmi >= 34.9) return nivel [4];
  if (bmi >= 29.9)return nivel [3];
  if (bmi >= 25.9)return nivel [2];
  if (bmi >= 18.5)return nivel [1];
  if (bmi < 18.5) return nivel [0];
}  
function criaP (){
  const p = document.createElement('p');
  return p;
}

function setResultado (msg, isValid) {
  const result = document.querySelector('#result');
  result.innerHTML = '';
const p = criaP();
  if (isValid) {  p.classList.add('paragrafo-resultado');} 
  else {
  p.classList.add('bad');
  }
  p.innerHTML = msg;
  result.appendChild(p);
  
}

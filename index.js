const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/i;
const cellRegex = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/;
const form = document.querySelector(".form")
const campos = document.querySelectorAll(".require")
const spans = document.querySelectorAll(".spans-required")
const finish = document.querySelector(".finishSpan")

// FUNÇÃO QUE COLOCA A BORDA VERMELHA E MOSTRA O SPAN
function setError(index) {
  campos[index].style.border = '2px solid #e63636';
  spans[index].style.display = 'flex';
}

// FUNÇÃO QUE RETIRA A BORDA E TIRA O SPAN
function removeError(index) {
  campos[index].style.border = '';
  spans[index].style.display = 'none';
}

// ENVIAR OS DADOS
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // VERIFICA SE OS DADOS FORAM CADASTRADOS CORRETAMENTE E SE CASO SIM ENVIA OS DADOS SE CASO NÃO EMITE O ALERTA E FINALIZA ALI O SUBMIT
  if (campos[0].value.length >= 3
    && campos[1].value.length >= 3
    && emailValidate()
    && cellValidate()
    && campos[4].value.length >= 8
    && campos[4].value == campos[5].value) {
    resetForm()
    finish.style.display = "block"
  } else {
    alert("Verifique se preencheu todos os dados corretamente")
    return false
  }
});

// FUNÇÕES PARA VALIDAR OS INPUTS

campos[0].addEventListener("input", () => {
  return campos[0].value.length < 3 ? setError(0) : removeError(0);
})

campos[1].addEventListener("input", () => {
  return campos[1].value.length < 3 ? setError(1) : removeError(1);
})

campos[2].addEventListener("input", emailValidate)

campos[3].addEventListener("input", cellValidate)

campos[4].addEventListener("input", () => {
  return campos[4].value.length < 8 ? setError(4) : removeError(4);
})

campos[5].addEventListener("input", () => {
  return campos[4].value == campos[5].value ? removeError(5) : setError(5);
})

function emailValidate() {
  if (!emailRegex.test(campos[2].value)) {
    setError(2)
    return false
  } else {
    removeError(2);
    return true
  }
}

function cellValidate() {
  if (!cellRegex.test(campos[3].value)) {
    setError(3)
    return false
  } else {
    removeError(3);
    return true
  }
}

function resetForm() {
  campos[0].value = ""
  campos[1].value = ""
  campos[2].value = ""
  campos[3].value = ""
  campos[4].value = ""
  campos[5].value = ""
}
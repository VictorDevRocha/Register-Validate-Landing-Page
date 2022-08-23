const emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/;
const cellRegex = /^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$/;
const form = document.querySelector(".form")
const campos = document.querySelectorAll(".require")
const spans = document.querySelectorAll(".spans-required")

function setError(index) {
  campos[index].style.border = '2px solid #e63636';
  spans[index].style.display = 'flex';
}

function removeError(index) {
  campos[index].style.border = '';
  spans[index].style.display = 'none';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  nameValidate();
  lastNameValidate();
  emailValidate();
  cellValidate();
  passValidate();
  repetPassValidate();

  if (campos[0].value.length >= 3
    && campos[1].value.length >= 3
    && emailValidate()
    && cellValidate()
    && campos[4].value.length >= 8
    && campos[4].value == campos[5].value) {
    campos[0].value = ""
    campos[1].value = ""
    campos[2].value = ""
    campos[3].value = ""
    campos[4].value = ""
    campos[5].value = ""
  } else {
    alert("erro")
  }
});

function nameValidate() {
  return campos[0].value.length < 3 ? setError(0) : removeError(0);
}

function lastNameValidate() {
  return campos[1].value.length < 3 ? setError(1) : removeError(1);
}

function emailValidate() {
  if (!emailRegex.test(campos[2].value)) {
    setError(2)
  } else {
    removeError(2);
  }

  return true
}

function cellValidate() {
  if (!cellRegex.test(campos[3].value)) {
    setError(3)
  } else {
    removeError(3);
  }

  return true
}

function passValidate() {
  return campos[4].value.length < 8 ? setError(4) : removeError(4);
}

function repetPassValidate() {
  return campos[4].value == campos[5].value ? removeError(5) : setError(5);
}
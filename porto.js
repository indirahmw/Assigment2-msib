const myForm = document.getElementById('my-form')
const fname = document.getElementById('fname-text')
const rname = document.getElementById('rname-text')
const aname = document.getElementById('aname-text')
const uname = document.getElementById('uname-number')
const lname = document.getElementById('lname-text')
const pname = document.getElementById('pname-number')
const ename = document.getElementById('ename-email')

const buttonSubmit = document.getElementById('my-button')
const myBox = document.getElementById('my-box')

let isLowerBracketShow = true
document.getElementById("fname-text").innerHTML = "Indira Rahmawati";
document.getElementById("rname-text").innerHTML = "Front End Developer";
document.getElementById("aname-text").innerHTML = "Full Time";
document.getElementById("uname-number").innerHTML = "21";
document.getElementById("lname-text").innerHTML = "Blitar";
document.getElementById("pname-number").innerHTML = "4"
document.getElementById("ename-email").innerHTML = "indira@gmail.com";

myForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const currentNama = myForm.elements.fname.value
  const currentRole = myForm.elements.rname.value
  const currentAvailability = myForm.elements.aname.value
  const currentUsia = myForm.elements.uname.value
  const currentLokasi = myForm.elements.lname.value
  const currentPengalaman =  myForm.elements.pname.value
  const currentEmail = myForm.elements.ename.value


  fname.innerHTML = currentNama
  rname.innerHTML = currentRole
  aname.innerHTML = currentAvailability
  uname.innerHTML = currentUsia
  lname.innerHTML = currentLokasi 
  pname.innerHTML = currentPengalaman
  ename.innerHTML = currentEmail

  toggleBox()
})
function toggleBox () {
  if(isLowerBracketShow) {
    isLowerBracketShow = false
    myBox.classList.remove('hide');
  } else {
    isLowerBracketShow = true
    myBox.classList.add('hide');
  }
}

buttonSubmit.addEventListener('click', (event) => {
  event.preventDefault()
  toggleBox()
})
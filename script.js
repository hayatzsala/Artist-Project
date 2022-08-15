const sendGift = document.getElementById('send-gift');
const giftList = document.getElementById('gift-list');
const data = document.getElementById('inputGift');
const donateResult = document.getElementById('donate-result');
const body = document.querySelector('body');
const donateButtons = Array.prototype.slice.call(document.getElementsByClassName('donate'));
let Name = "guest"

sendGift.addEventListener('click', () => {
  const para = document.createElement("p");
  const textNode = document.createTextNode(data.value + ` - from : ${Name}`);

  para.appendChild(textNode);
  giftList.appendChild(para);
});


donateButtons.forEach(function(button) {
  button.addEventListener('click', () => {
    console.log(button.value);
    donateResult.innerText = `TOTAL OF ${button.value} HAS BEEN DONATED TO THE BAND... THANK YOU!`
  }
  )
});
window.addEventListener('load', () => {
  myFunction();
})
function myFunction() {
  let person = prompt("Please enter your name:");
  if (person == null || person == "") {
    text = "guest";
  } else {
    text = person;
    Name = text;
  }

  alert(`WELCOME ${text}!`);
}
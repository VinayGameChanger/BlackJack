let arr = [];
let card = document.querySelector("#cards");
let add = document.querySelector("#sum");
let msg = document.querySelector('#message-el');
let money=document.querySelector('#money')
let sum = 0;
let balance=1000;

//random function generator
function randomNo(min, max) {
  let value = Math.floor(Math.random() * (max - min + 1)) + min;
  if (value === 11 || value === 12 || value === 13) {
    value = 10;
    return value
  } else if (value === 1) {
    value = 11;
    return value
  }
  return value
}

// start
function start() {
  document.getElementById("start").play();

  let a = randomNo(1, 13)
  let b = randomNo(1, 13)
  arr.push(a);
  arr.push(b)
  for (let i = 0; i <= (arr.length - 1); i++) {
    sum = sum + arr[i];
  }
  if (sum > 21) {
    msg.textContent = "You Lose"
    money.textContent=`Bal:₹${balance/2}`
  } else if (sum === 21) {
    msg.textContent = "You Win"
    money.textContent=`Bal:₹${balance*2}`
    

  } else {
    msg.textContent = "Try Again"

  }

  add.innerHTML = `Sum: ${sum}`;
  card.innerHTML = `Cards: ${a},${b}`
  document.getElementById("start-btn").disabled = true;
}


// restart
function restart() {
  location.reload()
}


//newCard
function newCard() {
  let c = randomNo(1, 13)
  arr.push(c);
  sum = 0;
  for (let i = 0; i <= (arr.length - 1); i++) {
    sum = sum + arr[i];
  }
  add.innerHTML = `Sum: ${sum}`;
  card.innerHTML += `,${c}`
  if (sum > 21) {
    msg.textContent = "You Lose"
    document.getElementById("lost").play();
    money.textContent=`Bal:₹${balance/2}`

    document.getElementById("new-card-btn").disabled = true;
  } else if (sum === 21) {
    msg.textContent = "You Win"
    document.getElementById("new-card-btn").disabled = true;
    document.getElementById("myAudio").play();
    money.textContent=`Bal:₹${balance*2}`

  } else {
    msg.textContent = "Try Again"
  }
}






var data = 0;

// document.getElementById("counting").innerText = data;

function increment() {
  data = data + 1;
  document.getElementById('counting').innerText = data;
}

function decrement() {
  if (data - 1 < 0) {
    return;
  }
  data = data - 1;
  document.getElementById('counting').innerText = data;
}

// Digital Clock
function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let am_pm = 'AM';

  if (hour > 12) {
    hour -= 12;
    am_pm = 'PM';
  }
  if (hour == 0) {
    hr = 12;
    am_pm = 'AM';
  }

  hour = hour < 10 ? '0' + hour : hour;
  min = min < 10 ? '0' + min : min;
  sec = sec < 10 ? '0' + sec : sec;

  const currentTime = hour + ':' + min + ':' + sec + am_pm;
  console.log(currentTime);
  document.getElementById('clock').innerText = currentTime;
}

setInterval(() => {
  showTime();
}, 100);

// Habit Questions

function habit1() {
  let text;
  let gymDays = prompt('How many days a week do you exercise?');
  switch (gymDays) {
    case '0':
      text = 'You should start to exercise more!';
      break;
    case '1':
      text = 'You need more exercise!';
      break;
    case '2':
      text = 'You are doing well, but you can do better!';
      break;
    case '3':
      text = 'You are doing well, but you can do better!';
      break;
    case '4':
      text = 'your are doing great!';
      break;
    case '5':
      text = 'your are doing great!';
      break;
    case '6':
      text = 'your are amazing! keep goin like that!';
      break;
    case '7':
      text = 'your are amazing! but sometimes you need to take a break!';
      break;
    default:
      text = 'A week have 7 days! Please enter a number between 0 and 7';
  }
  document.getElementById('answer1').innerText = text;
}

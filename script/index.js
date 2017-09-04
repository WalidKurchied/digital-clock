let monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let timeElement = document.getElementById("timeSpan");
let dateElement = document.getElementById("dateSpan");


setInterval(() => {
  let dateObj = new Date();

  let time = getTime(dateObj)
  let date = getDate(dateObj);

  timeElement.innerHTML = time;
  dateElement.innerHTML = date;
}, 1000);

function getTime(dateObj) {
  let hour = appendZero(dateObj.getHours());
  let minutes = appendZero(dateObj.getMinutes());
  let seconds = appendZero(dateObj.getSeconds());

  return `${hour}:${minutes}:${seconds}`;
}

function getDate(date) {
  let day = appendZero(date.getDate());
  let month = monthArray[date.getMonth()];
  let year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

function appendZero(num) {
  return num < 10 ? `0${num}` : num;
}

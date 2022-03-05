let sec = 0;
let min = 0;
let hour = 0;
let Ds = 0;
let dm = 0;
let dh = 0;
let interval;
let status = "stopped";

function stopWatch() {
  sec++;
  if (sec / 60 === 1) {
    sec = 0;
    min++;

    if (min / 60 === 1) {
      min = 0;
      hour++;
    }
  }
  if (sec < 10) {
    ds = "0" + sec.toString();
  } else {
    ds = sec;
  }
  if (min < 10) {
    dm = "0" + min.toString();
  } else {
    dm = min;
  }
  if (hour < 10) {
    dh = "0" + hour.toString();
  } else {
    dh = hour;
  }
  document.getElementById("stopWatch").innerHTML = `${dh}:${dm}:${ds}`;
}

function startStop() {
  if (status === "stopped") {
    interval = setInterval(stopWatch, 1000);
    document.getElementById("startStop").innerText = "STOP";
    status = "started";
  } else {
    clearInterval(interval);
    document.getElementById("startStop").innerText = "START";
    status = "stopped";
  }
}

function reset() {
  clearInterval(interval);
  sec = 0;
  min = 0;
  hour = 0;
  document.getElementById("startStop").innerHTML = "START";
  document.getElementById("stopWatch").innerHTML = "00:00:00";
}

const clock = document.getElementById("clock");

setInterval(() => {
  const date = new Date();
  clock.innerHTML = date.toLocaleDateString();
}, 1000);

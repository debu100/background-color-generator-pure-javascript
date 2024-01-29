const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  btn.innerText = `rgb(${r},${g},${b})`;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

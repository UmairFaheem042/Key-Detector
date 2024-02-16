const resultElement = document.getElementById("result");
document.addEventListener("keydown", (event) => {
  resultElement.innerHTML = `<p>The key Pressed is</p>
  <h2>${event.key}</h2>
  <p>Key Code is <span>${event.keyCode}</span></p>`;
});


window.addEventListener('load', ()=>{
resultElement.innerHTML='<h3 class="preText">Press Any Key To Get Result</h3>'
})
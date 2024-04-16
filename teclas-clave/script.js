const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  insert.innerHTML = `
    <div class="key">
        ${event.key === " " ? "Space" : event.key}
        <small>Tecla</small>
      </div>
      <div class="key red">
        ${event.keyCode}
        <small>Clave antigua</small>
      </div>
      <div class="key green">
        ${event.code}
        <small>Clave nueva</small>
      </div>`;
});
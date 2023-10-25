function abrirJanela() {
    document.getElementById('janela').style.backgroundImage = "url('./img/open.png')";
    document.getElementById('estado').textContent = "Janela Aberta.";
  }

  function fecharJanela() {
    document.getElementById('janela').style.backgroundImage = "url('./img/closed.png')";
    document.getElementById('estado').textContent = "Janela Fechada.";
  }

  function quebrarJanela() {
    document.getElementById('janela').style.backgroundImage = "url('./img/broken.png')";
    document.getElementById('estado').textContent = "Janela Quebrada!";
  }
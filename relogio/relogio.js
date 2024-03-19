function getTimeInBrazil() {
  const now = new Date();
  const options = { timeZone: 'America/Sao_Paulo' };
  return now.toLocaleTimeString('pt-BR', options);
}

function updateTime() {
  const timeElement = document.getElementById('time');
  const timeInBrazil = getTimeInBrazil();
  timeElement.textContent = timeInBrazil;
}


setInterval(updateTime, 1000);


updateTime();
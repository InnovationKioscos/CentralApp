
  // Función para cambiar el tema
  function toggleTheme() {
    document.body.classList.toggle('theme-dark');
    document.body.classList.toggle('theme-light');
  
    // Cambiar el fondo del cuerpo
    if (document.body.classList.contains('theme-light')) {
      document.body.style.background = "url('bg_Ligth.png') repeat 0 0";//'#f8f9fa'; // Fondo gris claro
      document.getElementById('logo').src = 'Kioscos_Black.png'; // Logo negro para tema claro
    } else {
      document.body.style.background = "url('bg_Dark.png') repeat 0 0";//'#161c2d'; // Fondo oscuro
      document.getElementById('logo').src = 'Kioscos_White.png'; // Logo blanco para tema oscuro
    }
  
  
    // Actualizar el ícono según el tema
    const themeIcon = document.querySelector('.theme-switch svg');
    if (document.body.classList.contains('theme-light')) {
      themeIcon.innerHTML = '<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>';
    } else {
      themeIcon.innerHTML = '<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>';
    }
  }

  



  /* TIMER */

  // Temporizador de 5 minutos
let timeLeft = 300; // 5 minutos en segundos
const timerText = document.getElementById('timer-text');
const timerPath = document.querySelector('.timer-path');

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerText.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  // Actualizar el progreso del círculo
  const progress = (timeLeft / 300) * 339.292;
  timerPath.style.strokeDashoffset = 339.292 - progress;

  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    timerText.textContent = "¡Tiempo expirado!";
    timerPath.style.strokeDashoffset = 339.292; // Reiniciar el círculo
  } else {
    timeLeft--;
  }
}

let timerInterval = setInterval(updateTimer, 1000);

// Función para reenviar el código
function resendCode() {
  alert("El código ha sido reenviado.");
  timeLeft = 300; // Reiniciar el temporizador
  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
}

// Autocompletar campos de código
document.querySelectorAll('.code-input').forEach((input, index, inputs) => {
  input.addEventListener('input', (e) => {
    if (e.target.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && index > 0 && e.target.value.length === 0) {
      inputs[index - 1].focus();
    }
  });
});
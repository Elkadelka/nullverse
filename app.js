if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

/* === PLANETY === */
const planetList = document.getElementById('planetList');
const addPlanetBtn = document.getElementById('addPlanet');

let planets = JSON.parse(localStorage.getItem('planets')) || [];

function renderPlanets() {
  planetList.innerHTML = '';
  planets.forEach((p, i) => {
    const li = document.createElement('li');
    li.textContent = p;
    li.style.animationDelay = `${Math.random() * 20}s`;

    const done = document.createElement('button');
    done.textContent = '🌕';
    done.onclick = () => {
      planets.splice(i, 1);
      save();
    };

    li.appendChild(done);
    planetList.appendChild(li);
  });
}

function save() {
  localStorage.setItem('planets', JSON.stringify(planets));
  renderPlanets();
}

addPlanetBtn.onclick = () => {
  const name = prompt('Název planety (volitelné)');
  if (name !== null) {
    planets.push(name || 'bezejmenná planeta');
    save();
  }
};

renderPlanets();

/* === STAV LODI === */
const shipState = document.getElementById('shipState');
shipState.value = localStorage.getItem('shipState') || 'stable';

function updateShipVisual(state) {
  document.body.dataset.ship = state;
}

updateShipVisual(shipState.value);
shipState.onchange = () => {
  localStorage.setItem('shipState', shipState.value);
  updateShipVisual(shipState.value);
};

/* === POZNÁMKY === */
const noteField = document.getElementById('noteField');
noteField.value = localStorage.getItem('notes') || '';
noteField.oninput = () =>
  localStorage.setItem('notes', noteField.value);

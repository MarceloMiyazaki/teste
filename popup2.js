const d4 = document.getElementById('d4');
const d6 = document.getElementById('d6');
const d8 = document.getElementById('d8');
const d10 = document.getElementById('d10');
const d12 = document.getElementById('d12');
const d20 = document.getElementById('d20');
const d100 = document.getElementById('d100');
const resultado = document.getElementById('resultado');
const registro = document.getElementById('registro');

//d4
d4.addEventListener('click', () => {
    const dado = {
        num : Math.floor(Math.random() * 4) + 1,
        lados : 'd4',
        timestamp: new Date().toISOString()
    };

    resultado.textContent = dado.num;

    chrome.runtime.sendMessage({ action: "salvar", dado: dado }, () => {
    loadHistory();
  });
});

//d6
d6.addEventListener('click', () => {
    const dado = {
        num : Math.floor(Math.random() * 6) + 1,
        lados : 'd6',
        timestamp: new Date().toISOString()
    };

    resultado.textContent = dado.num;

    chrome.runtime.sendMessage({ action: "salvar", dado: dado }, () => {
    loadHistory();
  });
});

//d8
d8.addEventListener('click', () => {
    const dado = {
        num : Math.floor(Math.random() * 8) + 1,
        lados : 'd8',
        timestamp: new Date().toISOString()
    };

    resultado.textContent = dado.num;

    chrome.runtime.sendMessage({ action: "salvar", dado: dado }, () => {
    loadHistory();
  });
});

//d10
d10.addEventListener('click', () => {
    const dado = {
        num : Math.floor(Math.random() * 10) + 1,
        lados : 'd10',
        timestamp: new Date().toISOString()
    };

    resultado.textContent = dado.num;

    chrome.runtime.sendMessage({ action: "salvar", dado: dado }, () => {
    loadHistory();
  });
});

//d12
d12.addEventListener('click', () => {
    const dado = {
        num : Math.floor(Math.random() * 12) + 1,
        lados : 'd12',
        timestamp: new Date().toISOString()
    };

    resultado.textContent = dado.num;

    chrome.runtime.sendMessage({ action: "salvar", dado: dado }, () => {
    loadHistory();
  });
});

//d20
d20.addEventListener('click', () => {
    const dado = {
        num : Math.floor(Math.random() * 20) + 1,
        lados : 'd20',
        timestamp: new Date().toISOString()
    };

    resultado.textContent = dado.num;

    chrome.runtime.sendMessage({ action: "salvar", dado: dado }, () => {
    loadHistory();
  });
});

//d100
d100.addEventListener('click', () => {
    const dado = {
        num : Math.floor(Math.random() * 100) + 1,
        lados : 'd100',
        timestamp: new Date().toISOString()
    };

    console.log( `${dado.num}`);

    resultado.textContent = dado.num;

    console.log( `${dado.lados}`);

    chrome.runtime.sendMessage({ action: "salvar", dado: dado }, () => {
    loadHistory();
  });
});

function loadHistory() {
  chrome.runtime.sendMessage({ action: "verRegistro" }, response => {
    registro.innerHTML = '';
    if (response && Array.isArray(response.history)) {
      response.history.slice().reverse().forEach(dado => {
        const li = document.createElement('li');
        li.textContent = ` ${dado.lados} : ${dado.num}`;
        registro.appendChild(li);
      });
    }
  });
};

loadHistory()
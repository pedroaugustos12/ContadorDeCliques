function calcular() {
    var num = Number(window.prompt('Digite um número:'));
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = `<p>O número a ser analisado será <strong>${num}</strong></p>`;
    resultado.innerHTML += `<p>O seu valor absoluto é <strong>${Math.abs(num)}</strong></p>`;
    resultado.innerHTML += `<p>A sua parte inteira é <strong>${Math.trunc(num)}</strong></p>`;
    resultado.innerHTML += `<p>O valor inteiro mais proximo é <strong>${Math.round(num)}</strong></p>`;
    resultado.innerHTML += `<p>A sua raiz quadrada é <strong>${Math.sqrt(num)}</strong></p>`;
    resultado.innerHTML += `<p>A sua raiz cubica é <strong>${Math.cbrt(num)}</strong></p>`;
    resultado.innerHTML += `<p>O valor de ${num} <sup>2</sup> é ${Math.pow(num, 2)}</p>`;
    resultado.innerHTML += `<p>O valor de ${num} <sup>3</sup> é ${Math.pow(num, 3)}</p>`;
    
}



// contador de cliques

  let contagemclick = 0;
  const click = document.getElementById(`contagemclick`);

  function contar() {
    contagemclick++;
    click.innerHTML = `<span style="color: #ff6600">${contagemclick}</span> clique${contagemclick !== 1 ? "s" : ""}`;
  }

  function zerar() {
    clickCount = 0;
    click.innerHTML = `<span style="color: #ff6600">0</span> cliques`;
  }

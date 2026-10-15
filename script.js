function calcular() {
  const valorLitro = parseFloat(document.getElementById('valorLitro').value) || 0;
  const qtdLitros = parseFloat(document.getElementById('qtdLitros').value) || 0;

  const total = valorLitro * qtdLitros;
  const imposto = total * 0.25; // 25% de imposto

  document.getElementById('valorTotal').innerText = 'R$ ' + total.toFixed(2);
  document.getElementById('valorImposto').innerText = 'R$ ' + imposto.toFixed(2);
}
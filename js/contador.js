(function(){
  const key = 'visitas_portfolio_facundo';
  const current = Number(localStorage.getItem(key) || '0') + 1;
  localStorage.setItem(key, String(current));
  const el = document.getElementById('visitas');
  if (el) el.textContent = current;
})();

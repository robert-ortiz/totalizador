
const cant_items = document.querySelector('#cant_items');
const form = document.querySelector('#ventas-form');
const div = document.querySelector('#resultado-div');
const precio_item = document.querySelector('#precio_item');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const cantitems = Number.parseInt(cant_items.value);
  const precioitem = Number.parseInt(precio_item.value);

  const total = cantitems * precioitem;

  div.innerHTML = '<p>' + total + '</p>';
});
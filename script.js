// script.js

const menuData = [
  { name: "Margherita Pizza", price: "$12" },
  { name: "Spaghetti Bolognese", price: "$15" },
  { name: "Caesar Salad", price: "$10" }
];

function loadMenu() {
  const menuList = document.getElementById("menuList");
  menuData.forEach(item => {
    const div = document.createElement("div");
    div.className = "menu-item";
    div.innerHTML = `<h3>${item.name}</h3><p>${item.price}</p>`;
    menuList.appendChild(div);
  });
}

document.getElementById("reservationForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Reservation submitted successfully!");
  this.reset();
});

window.onload = loadMenu;

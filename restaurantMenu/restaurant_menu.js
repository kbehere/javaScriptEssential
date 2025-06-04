const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15'];
const mainCourseMenu = ['Steak- $8', 'Pasta- $9', 'Burger- $8.3', 'Salmon- $8.55'];
const dessertMenu = ['Cake- $18.2', 'Ice Cream- $2', 'Pudding- $7', 'Fruit Salad- $4.99'];
let mainCourseItem = '';
let dessertItem = '';

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');

document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});

document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}

document.getElementById('dessertMenuItems').innerHTML = dessertItem;
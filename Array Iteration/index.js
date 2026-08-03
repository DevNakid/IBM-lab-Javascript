const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake - 12$', 'Ice Cream - 24$', 'Pudding - 8$', 'Fruit Salad - 10$'];
const breakfastMenuHTML = breakfastMenu.map((item,index)=>`<p>item ${index+1}: ${item}</p>`).join("");
// console.log(breakfastMenuHTML);
document.getElementById("breakfastMenuItems").innerHTML = breakfastMenuHTML;

let mainCourseMenuHTML = '';
mainCourseMenu.forEach((item,index)=>{
    mainCourseMenuHTML+=`<p>Course : ${index+1}: ${item}</p>`;
});
document.getElementById("maincourseMenuItems").innerHTML = mainCourseMenuHTML;
let desserMenuHTML = '';
dessertMenu.forEach((item,index)=>{
    desserMenuHTML+=`<p> item ${index+1}: ${item}</p>`;
})
document.getElementById("dessertMenuItems").innerHTML = desserMenuHTML;
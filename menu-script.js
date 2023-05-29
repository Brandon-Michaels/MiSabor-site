// Script to build html for menu items
// Creates children for parent tag <ul class="list-unstyled pb_food-menu">

function builder(name, desc, price) {
	price = price + ".00";
	return `<li>
        <div class="row">
        	<div class="col-lg-10">
        		<h3 class="pb_font-18 font-weight-bold">${name}</h3>
        		<p class="mb-0">${desc}</p>
        	</div>
        	<div class="col-lg-2"><span class="price"><sup>$</sup>${price}</span></div>
        </div>
</li>`;
}

// console.log(builder("egg", "it egg", "99"));

// Example data for Appetizers section, replace array data
let names = ["Mi Sabor Pepper Popper", "Platains", "Chip Sampler", "Nachos Fiesta", "Chips & Salsa", "Guacamole & Chips"];
let descs = ["2 Shrimp w/ Guacamole Stuffed Inside a Pepper", "Sweet Plantains w/ Refried Beans and Sour Cream", "Chips served w/ Red Sauce, Green Sauce & Guacamole", "Tortilla Chips Smothered w/ Melted Cheese, Black Beans, Lettuce, Tomato & Topped w/ Guacamole & Sour Cream & a Choice of Meat", "", ""];
let prices = [10, 7, 8, 17, 4, 6]; // Enter whole dollar amount ($x, not $x.xx)

// Populates string by looping through above arrays and returns html
let string = "";
for (let i=0; i<names.length; i++) {
	string+=builder(names[i],descs[i],prices[i]);
	string+=`\n`;
}
console.log(string);

// Copy output into index.html under the apropriate section, <ul class="list-unstyled pb_food-menu">
// Menu is divided into two columns <div class="col-md">, you may need to copy half of the items into one column and the other half in the other

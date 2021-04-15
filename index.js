/*
const duplicate = () => {
    const cheese = document.getElementById("cheeseCont0");
    const clone = cheese.cloneNode(true); //clone cheese
    clone.id = "";
    //clone.onclick = duplicate;
    cheese.parentNode.appendChild(clone);
}*/
//for incrementing id
var i = 1;
const add = () => {
    let displacement = 33;
    const formValue = document.getElementById("ingredientList").value; //form value

    const newIngredCont = document.createElement("li");


    var newIngredient = document.createElement("img");
    //change image source based on form value
    newIngredient.src = `img/${formValue}.png`;
    newIngredient.classList.add(formValue);
    //append image to container
    newIngredCont.appendChild(newIngredient);
    const prevIngredById = document.getElementById(`a${i - 1}`);
    console.log(prevIngredById);
    newIngredCont.id = "a" + i++;

    //for every new id increment the position* z-index
    if (newIngredCont.id == "a1") {
        displacement *= 8;
    }

    if (formValue == "cheese") displacement -= 43;
    else if (formValue == "patty") displacement += 10;
    //if (formValue == "patty") displacement += 15;
    const prevIngredStyle = window.getComputedStyle(prevIngredById);
    //console.log(prevIngredStyle);
    const matrix = new DOMMatrixReadOnly(prevIngredStyle.transform);
    console.log(matrix.m42); // translateY value
    newIngredCont.style.transform = `translateY(${matrix.m42 - displacement * 2}px)`;
    //newIngredCont.style.transform = `translateY(${-i * displacement * 2}px)`;
    newIngredCont.style.zIndex = i + 1;


    var burgerCont = document.getElementsByClassName("burgerCont")[0]; //elements is an array

    var prevIngredient = document.querySelector(".ingredients");
    burgerCont.prepend(newIngredCont);
    //burgerCont.insertBefore(newIngredCont, prevIngredient);//insert new  ontop 

    newIngredCont.classList.add("ingredients");
    //first state
    //requestAnimationFrame(() => {
    //second state, update animation before repaint
    //  cheezuCont.classList.remove("anim");
    //})

    setTimeout(() => { //animate
        newIngredCont.style.transform = `translateY(${matrix.m42 - displacement}px)`;
        newIngredCont.classList.add("anim")
    },
        50);

}
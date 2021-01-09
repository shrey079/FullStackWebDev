// GetElementByID Example
const bannerImage = document.getElementById("banner")
// Change something about the image



// document.getElementsByTagName()
// This gets all of the elements in the document of a certain tag.
const allImages = document.getElementsByTagName("img");
console.dir(allImages)

let i = 0;
for(let image of allImages){ 
    console.log(` `)
    console.log(`Image #${i + 1}`);
    console.log(`The height is: ${image.clientHeight} and the width is: ${image.clientWidth}`)
    console.log(`The source of the image is ${image.src}`)
    console.log(` `)
    i++;
}

const allDivs = document.getElementsByTagName("div")
console.log(`There are currently ${allDivs.length} divs on this page.`)

// const allLinks = document.querySelectorAll('a');

// // for (let link of allLinks) {
// //     link.innerText = 'I AM A LINK!!!!'
// // }


// for (let link of allLinks) {
//     link.style.color = 'rgb(0, 108, 134)';
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy'
// }

// SHOULD USE QUERYSELECTORALL

//  document.getElementsByClassName() returns an iterable of "Elements" that have the certain class name specfied.
const allSquares = document.getElementsByClassName('square');
// We can change all the classes now if we wish to
for(let sqr of allSquares){
    sqr.src = "https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/chrome-true.png"
}

// Query selector method gives the first match for an "Element"
document.querySelectorAll('p');

//////////////////////////////////////////////////////////////

// Now we loook at manipulating the actual stuff in the page
const allLinks = document.querySelectorAll('a');
const allPargraphs = document.querySelectorAll('p');

for( let link of allLinks){ 
    link.innerText = "Was up bro?"
}

for(let p of allPargraphs){
    console.log("______________________________________________")
    console.log(p.innerText);
    console.log(p.textContent);
    console.log(p.innerHTML);
}

// If you want to change something you need to use .innerHTML c
const h1 = document.querySelector('h1')
h1.innerHTML += " owned by <i>Shrey Patel</i>";

// getAttribute and setAttribute methods
const firstImage = document.querySelector("img")
console.log(firstImage.getAttribute("src")); 
firstImage.setAttribute("src", "https://newevolutiondesigns.com/images/freebies/cool-wallpaper-1.jpg")
firstImage.setAttribute("alt" , "Shrey's cool image of a cat. Isn't it so cool looking")


// we can also change the style 
h1.style.color = "#ff4434"

// We can also find the style on someting using this methof
console.log(window.getComputedStyle(h1).color);


// Class list example 
const firsth2 = document.querySelector('h2')

firsth2.classList.add("myclass")
firsth2.classList.add("myclass2")


// parents, children and so on

// parentElement
const Silkie = document.querySelector('b')
const pSilie = Silkie.parentElement; 
console.log(pSilie.innerHTML);

// children
const child = pSilie.children[0]
console.dir(child)

console.dir(pSilie.children)

// previous and next element sibling
const secondChild = child.nextElementSibling
console.dir(secondChild)

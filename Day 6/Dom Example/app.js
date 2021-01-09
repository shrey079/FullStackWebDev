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

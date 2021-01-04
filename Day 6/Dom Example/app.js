// GetElementByID Example
const bannerImage = document.getElementById("banner")
// Change something about the image



// document.getElementsByTagName()
// This gets all of the elements in the document of a certain tag.
const allImages = document.getElementsByTagName("img");
console.dir(allImages)

let i = 0;
for(image of allImages){ 
    console.log(` `)
    console.log(`Image #${i + 1}`);
    console.log(`The height is: ${image.clientHeight} and the width is: ${image.clientWidth}`)
    console.log(`The source of the image is ${image.currentSrc}`)
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

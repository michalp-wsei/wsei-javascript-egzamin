//1
const sampleClassElements = document.querySelectorAll(".sample_class")
const getTagsOfElements = function(elements) {
    let arr = [];
    for(var element of elements) {
        arr.push(element.tagName);
    }
    return arr
}


console.log(getTagsOfElements(sampleClassElements))

//2
const idElement = document.getElementById("sample_id");
const getClassesOfElement = (element) => {
    let arr = [];
    arr.push(element.className)
    return arr;
}

console.log(getClassesOfElement(idElement))

//3

const sampleClass2Elements = document.querySelectorAll(".sample_class_2 li");
const getInnerTextsOfElements = (elements) => {
    let arr = [];
    elements.forEach((element) => {
        arr.push(element.innerHTML)
    })
    return arr
}

console.log(getInnerTextsOfElements(sampleClass2Elements));

//4

const links = document.querySelectorAll("a");

const getAddressesOfElements = (elements) => {
    let arr = [];
    elements.forEach((element) => {
        arr.push(element.getAttribute("href"));
    })
    return arr;
}

console.log(getAddressesOfElements(links))

//5
const childrens = document.querySelector('.sample_class_3').children;
console.log(getTagsOfElements(childrens));

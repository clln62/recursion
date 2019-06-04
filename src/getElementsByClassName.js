// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
    //console.log (document.getElementsByClassName(className))  ;
    // console.log('document.body.childNodes', document.body.childNodes)
    let elements = [];
    var findElements = function (element) {
        if (element.classList && element.classList.contains(className)) {
            elements.push(element)
        } 
        // if (element.childNodes && element.children.contains(className)) {
        //     elements.push(element)
        // }
        //console.log(element.children)
        console.log(element.children)
        for (let i = 0; i < element.children.length; i++) {
            // if (element.children[i] == (className)) {
            //     elements.push(element.children[i])
            // }
            console.log(elements.children[i])
            findElements(elements.children[i])
        }
        // return getElementsByClassName (className);
    }
    // return document.body.classList.contains(className);
    findElements(document.body);
    //console.log(elements)
    return elements;
    //console.log(document.body.classList.contains(className))
    // console.log('document.body', document.body)
    // console.log('document.body.classList', document.body.classList)
    
    // return document.body.childNodes.classList === className ? true : false;
};

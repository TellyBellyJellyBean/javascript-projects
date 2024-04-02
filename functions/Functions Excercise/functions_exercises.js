function makeLine(size) {   // this is initiating the function
    let line = ''   // initiating the line as blank to be populated
    for (let i = 0; i < size; i++){    //this is the loop the starts at index 0, goes for the size defined in the function (5 for this exercise), and iterates incrementally.
        line += '#';    //this is part of the loop that updates the line variable every iteration with a "#"
    }   
    return line; //this is the end of the function that 'returns' the line data back to the console, or outside of the function.
}

console.log(makeLine(5))    //prints the function 

function makeSquareSize(size) {
    let square = makeRectangle(size,size);
    return square;
}
console.log(makeLine(5));
    let square = ''
    for (let i = 0; i < size; i++) {
        square += `\n${makeLine(size)}`
    }
    
    return square;


console.log(makeSquareSize(5));

function makeRectangle(width, height) {
    let rectangle = ''
    for (let i = 0; i < height; i++) {
        rectangle += `\n${makeLine(width)}`;
    }

    return rectangle;

}
console.log(makeRectangle(5, 3));

function makeDownwardStairs(height) {
    let downStairs = '';
    for (let i = 0; i < height; i++) {
        downStairs += `\n${makeLine(i+1)}`;
    }
    return downStairs;
}

console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars) {
    let spaceLine = "";
    let spaces = "";
    let chars = makeLine(numChars); 
    for (let i = 0; i < numSpaces; i++){
        spaces+=" ";
    }
    spaceLine = spaces+chars+spaces;
    return spaceLine;

}
console.log(makeSpaceLine(3, 5));

function makeIsosceleseTriangle(height) {
    let isoTri = ''
    for (let i = 0; i < height; i++) {
        isoTri += `\n${makeSpaceLine(height - i - 1, 2 * i + 1)}`
    }
    return isoTri;
}

console.log(makeIsoscelesTriangle(5));

function makeDiamond (height) {
    let diamond = "";
    let top = makeIsosceleseTriangle(height);
    let bottom = "";
        for (i = 0; i < top.length; i++){
            bottom = top[i]+ bottom;
        }
    diamond = top + "\n"+bottom;
    return diamond;
}
console.log(makeDiamond(8));

// SOLUTION STARTS HERE:

function makeLine(size){
    let line="";
    for (let i=0;i<size;i++){
        line+="#";
    }
    return line;
}
// console.log(makeLine(5));

function makeSquare(size){
    let square=makeRectangle(size,size);
    return square;
}
// console.log(makeSquare(5));

function makeRectangle(width,height){
    //height = how many lines to print
    // width = how many characters we want each line to have. 
    let rect="";
    for(let i=0;i<height;i++){
        rect+=\n${makeLine(width)};
    }
    return rect;
}
// console.log(makeRectangle(5,3));

function makeDownwardStairs(height){
    let downStairs = '';
    for(let i = 1; i<height+1; i++){
        downStairs+=\n${makeLine(i)};
    }
    return downStairs;
}
// console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars){
    let spaceLine="";
    let spaces = "";
    let chars = makeLine(numChars);
    for(let i = 0; i<numSpaces;i++){
        spaces+=" ";
    }
    spaceLine=spaces+chars+spaces;
    
    return spaceLine;
}
// console.log(makeSpaceLine(3,5));

function makeIsoscelesTriangle(height){
    let isoTri='';
    for(let i =0;i<height;i++){
        isoTri+=\n${makeSpaceLine(height - i - 1, 2 * i + 1)}
    }
    return isoTri;
}
console.log(makeIsoscelesTriangle(5));

function makeDiamond(height){
    let diamond="";
    let top=makeIsoscelesTriangle(height);
    let bottom = "";
        for(i=0;i<top.length;i++){
            bottom = top[i]+bottom;
        }
    diamond=top + "\n"+bottom;
    return diamond;
}
console.log(makeDiamond(8));
/*
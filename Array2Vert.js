//This can be any shape that is a single object.  Offshoots wont be detected and will probable result in early termination of the function. 
let testArray = 
[
[0,0,0,0],
[0,1,1,0],s
[0,1,1,0],
[0,0,0,0],
]



logArray(testArray);
console.log("--------Start Post Processing--------");
newarray = expandToVerts(testArray);
logArray(newarray);
newarray =getOuterSquares(newarray);
logArray(newarray);

console.log("--------Start Converting to vertexmap--------");
ArraytoVertexMap(newarray);






function ArraytoVertexMap(startArray){

inputArray = startArray; // want to leave the original untouched.
console.log(inputArray)

//    inputArray[y][x] 

//the length of our y slot is our x length
var startX = inputArray[0].length/2;

var startY;
for (let index = 0; index < inputArray.length; index++) {

    const element = inputArray[index][startX];
    console.log(element);
    if (element !=0){
        startY=index;
        break;
    }
}
console.log("Starting Position is X: ",startX," Y: ",startY );

//our output vert table
var OutputVertTable = []; 

//The position we are currently looking at in the input array
var currentPos ={
    x: startX,
    y: startY,
}

//the order we do our movements (clockwise starting up)
var MoveTable = {
    Check: {
        x: [ 0,  1, 1, 1, 0,-1,-1,-1],
        y: [-1, -1, 0, 1, 1, 1, 0,-1],
    },

};

//check all 7 dirrections
for (let index = 0; index < 7; index++) {
    
    //example. Given our current position look at the side pulled from the move table.
   // inputArray[   currentPos.x+MoveTable.y[index]    ]    [    currentPos.y+MoveTable.x[index]    ]


    if(inputArray[currentPos.y+MoveTable.Check.y[index]    ]    [    currentPos.x+MoveTable.Check.x[index]    ] !== 0   )
    {
        console.log("End position at "+index*45);
        console.log((currentPos.x+MoveTable.Check.x[index])+" "+(currentPos.y+MoveTable.Check.y[index]));
        inputArray[currentPos.y][currentPos.x] = 0
        logArray(inputArray);
        OutputVertTable.push(currentPos.x+" "+currentPos.y);
        currentPos.x = currentPos.x+MoveTable.Check.x[index];
        currentPos.y = currentPos.y+MoveTable.Check.y[index];
        //set to -1 because it will be incremented next loop
       index =-1;
    }



}


OutputVertTable.push(currentPos.x+" "+currentPos.y);
console.log(OutputVertTable);
}


function expandToVerts(array) {
    const expandedArray = [];

    // Iterate over each row in the input array
    for (let row of array) {
        // Create two new rows for each row in the input array
        let newRow1 = [];
        let newRow2 = [];

        // Iterate over each element in the row
        for (let element of row) {
            // For each element, add it twice to both newRow1 and newRow2
            newRow1.push(element, element);
            newRow2.push(element, element);
        }

        // Add both new rows to the expandedArray
        expandedArray.push(newRow1, newRow2);
    }

    return expandedArray;
}

function getOuterSquares(grid) {
    // Get the number of rows and columns
    const rows = grid.length;
    const cols = grid[0].length;
    
    // Create an empty output array initialized with zeros
    const result = Array.from({ length: rows }, () => Array(cols).fill(0));

    // Iterate over each cell in the grid
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // Define variables to track the neighbors of the current cell
            const top = r > 0 ? grid[r - 1][c] : 0;
            const bottom = r < rows - 1 ? grid[r + 1][c] : 0;
            const left = c > 0 ? grid[r][c - 1] : 0;
            const right = c < cols - 1 ? grid[r][c + 1] : 0;

            // Check if any of the neighbors is exposed (zero)
            const exposed = top === 0 || bottom === 0 || left === 0 || right === 0;

            // If any neighbor is exposed, keep the original cell value; otherwise, set it to zero
            if (exposed) {
                result[r][c] = grid[r][c];
            } else {
                result[r][c] = 0;
            }
        }
    }
    
    return result;
}




function logArray(array) {
    // Initialize an empty string to hold the final output
    let output = "";

    // Iterate through each row in the array
    for (let i = 0; i < array.length; i++) {
        // Convert the current row to a string and add it to the output string
        output += array[i].join(" ") + "\n";
    }

    // Log the final output string, which contains all rows of the array
    console.log(output);
}





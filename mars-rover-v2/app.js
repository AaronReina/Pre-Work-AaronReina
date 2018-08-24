//First rover , i added and additional key (id ) to it.
var rover1 ={
  id: 1,
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};
//Second rover
var rover2 ={
  id: 2,
  direction: "N",
  x: 9,
  y: 9,
  travelLog: []
};
//list of orders
var commandList1 = "RFFFFFRFFFFFFRFFFRFFB";
var commandList2 = "BBFFFFFLFFFFFFRFFFRFF";

// I will use this var to avoid rover accidents.
var lastMove =[[0,0]];

// this is the rover's grid
var roverMap1 = [
  ["C", "C", "C", "C", "C", "C", "C", "C", "O", "C"],
  ["C", "C", "C", "C", "C", "C", "O", "C", "C", "C"],
  ["C", "C", "C", "C", "O", "C", "C", "C", "C", "C"],
  ["C", "C", "C", "O", "C", "C", "C", "C", "C", "C"],
  ["C", "C", "C", "C", "C", "C", "C", "C", "C", "C"],
  ["C", "C", "C", "C", "C", "C", "C", "C", "C", "C"],
  ["C", "C", "C", "C", "C", "C", "C", "C", "C", "C"],
  ["C", "C", "C", "C", "C", "C", "C", "C", "O", "C"],
  ["C", "C", "O", "C", "C", "C", "C", "C", "C", "C"],
  ["C", "C", "C", "C", "C", "C", "C", "C", "C", "C"],
];
// this function change the rover orientation and push the las position of the rover
function turnLeft(rover){
  switch (rover.direction){
    case "N":  ( rover.direction = "W" , console.log("just turning") , lastMove.push([rover.y,rover.x]))
    break;
    case "W":  ( rover.direction = "S", console.log("just turning") , lastMove.push([rover.y,rover.x]))
    break;
    case "S":  ( rover.direction = "E", console.log("just turning") ,lastMove.push([rover.y,rover.x]))
    break;
    case "E":  ( rover.direction = "N", console.log("just turning") , lastMove.push([rover.y,rover.x]))
    break;}
}
// this function change the rover orientation and push the las position of the rover
function turnRight(rover){
  switch (rover.direction){
case "N":  ( rover.direction = "E", console.log("just turning") , lastMove.push([rover.y,rover.x]))
break;
case "E":  ( rover.direction = "S", console.log("just turning") ,lastMove.push([rover.y,rover.x]))
break;
case "S":  ( rover.direction = "W", console.log("just turning") , lastMove.push([rover.y,rover.x]))
break;
case "W":  ( rover.direction = "N", console.log("just turning" ) , lastMove.push([rover.y,rover.x]))
break;}
}

// this function avoid leaving the grid, obstacles, other rovers, showing this in the console and if all of this things are ok .... 
//move the rover , save the position in the map, show it in the console and save the las position
//I had to add string() before compare the 2 options in the second else if, because they hace the same info but types are diferents
function moveForward(rover,roverMap){
  switch (rover.direction){
    case "N": 
    if (rover.y === 0){console.log("We cant make that move without left the grid for the north side")}
    else if (roverMap[rover.x][rover.y-1] == "O"){console.log("we cant go through obstacles ")}
    else if (String([rover.x,rover.y-1])  == String(lastMove[lastMove.length-1])){console.log("we cant go through vehicles ")}
    else{ rover.y -- , console.log(rover.x,rover.y),roverMap[rover.y][rover.x] = rover.id , lastMove.push([rover.y,rover.x])}
    break;
    case "E":  if (rover.x === 9){console.log("We cant make that move without left the grid for the east side")}
    else if (roverMap[rover.x+1][rover.y] == "O"){console.log("we cant go through obstacles ")}
    else if (String([rover.x+1,rover.y] ) == String(lastMove[lastMove.length-1])){console.log("we cant go through vehicles ")}
    else { rover.x ++, console.log(rover.x,rover.y),roverMap[rover.y][rover.x] = rover.id,  lastMove.push([rover.y,rover.x])}
    break;
    case "S": if (rover.y === 9){console.log("We cant make that move without left the grid for the south side")}
    else if (roverMap[rover.x][rover.y+1] == "O"){console.log("we cant go through obstacles ")}
    else if (String([rover.x,rover.y+1])  == String( lastMove[lastMove.length-1])){console.log("we cant go through vehicles ")}
    else { rover.y ++ , console.log(rover.x,rover.y),roverMap[rover.y][rover.x] = rover.id, lastMove.push([rover.y,rover.x])}
    break;
    case "W": if (rover.x === 0){console.log("We cant make that move without left the grid for the west side")}
    else if (roverMap[rover.x-1][rover.y] == "O"){console.log("we cant go through obstacles ")}
    else if (String([rover.x-1,rover.y])  == String(lastMove[lastMove.length-1])){console.log("we cant go through vehicles ")}
    else { rover.x --, console.log(rover.x,rover.y),roverMap[rover.y][rover.x] = rover.id, lastMove.push([rover.y,rover.x])}
    break;}
    }
    // this function avoid leaving the grid, obstacles, other rovers, showing this in the console and if all of this things are ok .... 
//move the rover , save the position in the map, show it in the console and save the las position
//I had to add string() before compare the 2 options in the second else if, because they hace the same info but types are diferents
    function moveBackwards(rover,roverMap){
      switch (rover.direction){
        case "N": 
        if (rover.y === 9){console.log("We cant make that move without left the grid for the south side")}
        else if (roverMap[rover.x][rover.y+1] == "O"){console.log("we cant go through obstacles ")}
        else if (String([rover.x,rover.y+1])  == String(lastMove[lastMove.length-1])){console.log("we cant go through vehicles ")}
       else{ rover.y ++ , console.log(rover.x,rover.y),roverMap[rover.y][rover.x] = rover.id , lastMove.push([rover.y,rover.x])}
        break;
        case "E":  if (rover.x === O){console.log("We cant make that move without left the grid for the west side")}
        else if (roverMap[rover.x-1][rover.y] == "O"){console.log("we cant go through obstacles ")}
        else if (String([rover.x-1,rover.y] ) == String(lastMove[lastMove.length-1])){console.log("we cant go through vehicles ")}
        else { rover.x --, console.log(rover.x,rover.y), roverMap[rover.y][rover.x] = rover.id , lastMove.push([rover.y,rover.x])}
        break;
        case "S": if (rover.y === 0){console.log("We cant make that move without left the grid for the north side")}
        else if (roverMap[rover.x][rover.y-1] == "O"){console.log("we cant go through obstacles ")}
        else if (String([rover.x,rover.y-1] ) == String(lastMove[lastMove.length-1])){console.log("we cant go through vehicles ")}
       else { rover.y -- , console.log(rover.x,rover.y),roverMap[rover.y][rover.x] = rover.id , lastMove.push([rover.y,rover.x])}
        break;
        case "W": if (rover.x === 9){console.log("We cant make that move without left the grid for the east side")}
        else if (roverMap[rover.x+1][rover.y] == "O"){console.log("we cant go through obstacles ")}
        else if (String([rover.x+1,rover.y] == lastMove[lastMove.length-1])){console.log("we cant go through vehicles ")}
        else { rover.x ++, console.log(rover.x,rover.y),roverMap[rover.y][rover.x] = rover.id , lastMove.push([rover.y,rover.x])}
        break;}
        }
//this function takes all rovers, list and maps, and depends of the instructions call to the rest of the functions.
    function commandListReader(commandLista , commandListb , rovera , roverb , roverMap  ){
for (var i = 0; i< commandLista.length ; i++){
  
if (commandLista[i]== "F" ){ rovera.travelLog.push([rovera.x,rovera.y]), moveForward(rovera, roverMap)  }
else if (commandLista[i]== "B" ){rovera.travelLog.push([rovera.x,rovera.y]), moveBackwards(rovera,roverMap)  }
else if (commandLista[i]== "L" ){rovera.travelLog.push([rovera.x,rovera.y]), turnLeft(rovera)}
else if (commandLista[i]== "R" ){rovera.travelLog.push([rovera.x,rovera.y]), turnRight(rovera)}
else {console.log("Wrong Key "+ commandLista[i]+ " at entry number " +i )}
if (commandListb[i]== "F" ){ roverb.travelLog.push([roverb.x,roverb.y]), moveForward(roverb,roverMap)  }
else if (commandListb[i]== "B" ){roverb.travelLog.push([roverb.x,roverb.y]), moveBackwards(roverb,roverMap)  }
else if (commandListb[i]== "L" ){roverb.travelLog.push([roverb.x,roverb.y]), turnLeft(roverb)}
else if (commandListb[i]== "R" ){roverb.travelLog.push([roverb.x,roverb.y]), turnRight(roverb )}
else {console.log("Wrong Key "+ commandListb[i]+ " at entry number " +i )}
}
    // This lines show the final result in the console. I didnt put they in a function .
    // because this ones are not part of the exercise, but i think that they are important 
    console.log("this is the journey of the rover1")
    for (var j = 0; j< rover1.travelLog.length ; j++){
      
  console.log ("In the movement "+j+ " the position of the rover1 is "+rover1.travelLog[j]) }
  console.log("The final position of the rover1 is " +rover1.x,rover1.y)

  console.log("this is the journey of the rover2")
  for (var h = 0; h< rover2.travelLog.length ; h++){
    
console.log ("In the movement "+h+ " the position of the rover2 is "+rover2.travelLog[h]) }
console.log("The final position of the rover2 is " +rover2.x,rover2.y)
  
    }
    
    // in this line y call the principal function that makes all works 
    commandListReader(commandList1, commandList2, rover1 , rover2, roverMap1);
// I show the grid whit this last one
    console.log("The final map is this one (obstacles O   clear spaces C    Rover1 1      Rover2 2)")
    console.log(roverMap1.join("\n"))
  
  
    
  
 



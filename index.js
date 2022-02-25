// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

function superbowlWin(array){
   //iterate through the array, search for win
let winner = array.find(isAWin); 
//return the year of the win or undefined if none
    if (winner!== undefined) {
        return winner["year"]
    } else return undefined;
 
};

function isAWin(obj){
   return obj["result"] === "W"
}

console.log(superbowlWin(record)); 
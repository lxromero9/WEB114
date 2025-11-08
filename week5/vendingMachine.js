let snackCount = prompt("How Many Snacks Do You Want?");

if(snackCount === null){
    console.log("No snacks requested. Exiting.");
}

for(let i = 1; i <= snackCount; i++){
    let snack = prompt("Enter Snack #" + i + " Name:");
        if(snack === null){
            console.log("Snack Selection Canceled. Exiting.");
            break; // this will stop the loop
        }
    console.log("Snack #" + i +": " + snack + " Given To Customer");
    if(i % 3 === 0) {
        console.log("You Got A Bonus Snack!");
    }
}




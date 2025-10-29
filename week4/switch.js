const favMonth = prompt("Enter your favorite month: ");
if (! isNaN(favMonth)){ 
    console.log("Please enter a valid month, not numbers!");
}
else {
switch (favMonth.toLowerCase()) {
    case "january":
        console.log("January is the first month of the year and always feels like the longest.");
        break;
    
    case "february":
        console.log("February is the shortest month and we celebrate St. Valentines day.");
        break;

    case "march":
        console.log("March is a great month in which St Patricks is celebrated!");
        break;

    case "april":
        console.log("April is a fun month! Just be careful not to get pranked on the first day!");
        break;
    
    case "may":
        console.log("May is the beginning of summer! Time to hit the lake!");
        break;

    case "june":
        console.log("June is the best time to get the campfire going with smores and joined with friends!");
        break;

    case "july":
        console.log("July!! Get those fireworks ready to pop and celebrate the country's independence!");
        break;

    case "august":
        console.log("August, is still a very hot month! We always get tricked with an early fall.");
        break;

    case "september":
        console.log("Do you remember? The 21st night of September.");
        break;

    case "october":
        console.log("Spooky season! Get those pumpkins carved and candy ready!");
        break;

    case "november":
        console.log("Time to get the family together for the Thanksgiving feast!");
        break;

    case "december":
        console.log("HO HO HO!! Santa is around the corner!");
        break;
    }

    if (favMonth == "december" || favMonth == "january" || favMonth == "february") {
        console.log("You love the winter months! The cold is the easiest weather to handle. Bundle up!");
    }
    else if(favMonth == "june" || favMonth == "july" || favMonth == "august"){
        console.log("You enjoy the summer months. You must enjoy the heat and the longer days.");
    }
    else{
        console.log("The other months are pretty cool too!");
    }
}
// switch(key){
//     case value:

//         break;
    
//     default:
//         break;
// }

const month = 3;
switch (month){
    case 1:                             //shift+alt+down arrow
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("default case matched");
        break;
}

// if there was no break after evry case, then as soon as a case is matched, switch is on and all cases (**except default**) after that is executed, so to avoid this use break;


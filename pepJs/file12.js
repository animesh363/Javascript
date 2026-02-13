// let score =90
// if(score>50){
//     result = "Pass";
// }else{
//     result = "Fail";
// }
// console.log(result);

// let score = 90
// let result  = score > 50 ? "Pass" : "Fail"
// console.log(result);

// let score = 9
// let  result = score>50 && "Pass"
// console.log(result);



// let score = 9
// let  result = score>50 || "Pass"
// console.log(result);



//? 
// let score = 50;

// switch(score){
//     case (score>90):{
//         console.log("Grade A");
//         break;
//     }
//     case (score>=80 && score<90):{
//         console.log("Grade B");
//         break;
//     }
//     case (score>=70 && score<80):{
//         console.log("Grade C");
//         break;
//     }
//     case (score>=60 && score<700):{
//         console.log("Grade D");
//         break;
//     }
//     default:{
//         console.log("Fail");
//     }
// }


let score = 85;
switch(true){       //we are comaring it with true b'z each case is expression which will return a true/false
    case (score>90):{
        console.log("Grade A");
        break;
    }
    case (score>80):{
        console.log("Grade B");
        break;
    }
    case (score>70):{
        console.log("Grade C");
        break;
    }
    case (score>60):{
        console.log("Grade D");
        break;
    }
    default:{
        console.log("Fail");
    }
}



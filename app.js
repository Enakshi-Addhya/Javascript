//qs1

//var age= 12;
//console.log(age);

//qs2

// let city = "Mumbai";
// city="Pune";
// console.log(city);

//qs3

// const pi = 3.14;
// pi = 3.14159;

//qs4

// var a;
// console.log(a);

//qs5

// let a=12;
// let a=14;

//qs6

// {
//     var a=12;
// }
// console.log(a);

//qs7

// console.log(a);
// var a=12;

//qs8

// console.log(a);
// let a=12;

//qs9

// const colour="Blue";
// colour="Black";
// console.log("colour");

//qs10
//a=15;
//b=28;
//c=49;
//console.log(a);
//console.log(b);
//console.log(c);

//{
//var a=12;
//let b=24;
//const c=44;
//console.log(a);
//console.log(b);
//console.log(c);
//}

//console.log(a+1);
//console.log(b);
//console.log(c);

//OPERATORS

//Arithmatic(+,-,*,/),
//comparison(==[doesn't check type(string/number);if the number is same then it returns true],===[checks type even if the number is same but type doesn't match then returns false],!=[not strict comparison],!==[same as the triple equal and double equal]
//>=, <=)//
//assignment(=,+=,-=,*=,/=,%=),
//logical(&&,||,!),
//unary,(+"10" = 10 but +'Ena'=NaN)
//ternary (12>13 ? console.log("true") : console.log("false"))

//function getGrade(score){
    //if (score <32) return "fail";
    //else if (score<=59 && score>=33){
         //return "D";
    //}
    //else if (score<=69 && score>=60){
         //return "D";
    //}
     //else if (score<=79 && score>=70){
         //return "B";
    // } 
    //else if (score<=89 && score>=80){
        // return "A";
    //}
    //else if (score<=100 && score>=90){
         //return "A+";
    //}
    //else {
       // return "Invalid marks";
    //}
//}

//console.log(getGrade(67));

/*we use for loop when we know that where to start, where to end and how to go to the end
** we use while loop when we know from where to start but don't know about where to stop.*/

//FOR
// for(start;end;change)
/*for(let i=3;i<9;i++){
    console.log(i);
}*/

//WHILE
/* [start
    while(end)
    (code)
    change] 

let i= 1;
    while(i<6){
        console.log(i);
    i++;
    } */

//DO WHILE(its not like for and while as even if the code is wrong do while loop will work 1 time)
 /*let i=1;
 do{
    console.log(i);
    i++;
 }
 while(i<10)*/
 
 //BREAK
/*for(let i=3;i<9;i++){
    console.log(i);
    if(i===5){
    break;
    }
}*/

//CONTINUE

/*for(let i=3;i<9;i++){
    if(i===7){
      continue;
    }
    console.log(i);
}*/

/*for(let i= 1; i<11; i++){
    if(i%2 === 1){
    console.log(i);
    }
}*/

/*for (let i=1; i<11; i++){
        
        console.log(i*5);
        
    }*/
/*let sum = 0;
for (let i=1; i<101; i++){
    
    sum= sum+i;
    }
    console.log(sum);*/

/*for (let i=1; i<51; i++){
    
    if(i%3===0){
        console.log(i);
    }
}*/

/*let val = prompt("Give a number: ");

for(i=1;i<val;i++){
    if(i%2 === 0){
         console.log({i}, "is even");
    }
    else{
         console.log({i}, "is odd");
    }
    
}*/

/*let count=0;
for(let i=1;i<=100;i++){
    if(i%3===0 && i%5===0){
        count++;
        console.log(i);
        
    }


}

console.log(`total ${count} number divisible by 3 and 5 both`);*/


/*for(let i=1; i<101 ; i++){
    if(i%7=== 0){               OUTPUT-> 7 isn't printing.
        break;
    }
    console.log(i);
}

for(let i=1; i<101 ; i++){
    console.log(i);
    if(i%7=== 0){               OUTPUT-> 7 is printing.
        break;
    }
}*/

/*for (let i=1; i<=20; i++){
    if(i%3 === 0){
        continue;
    }
        console.log(i);
}*/

/*let count=0;
for(let i= 1;i<=100;i++){
    if(i%2===1){
        
        console.log(i);
        count++;
    }
    if(count===5){
        break;
    }
}*/

/*function hyhy(){
                        !!function declaration
}

let fnc= function(){
                         !!function expression
}*/

/* let fnc= ()=>{
                         //this symbol above is known as fat arrow symbol
    }*/
 
/*function abcd(v1){
    console.log(`${v1} naach raha h`);
}                         
abcd("ena");
abcd("Anj")*/

/*function add(v1,v2){
    console.log(v1+v2);
}
add(5,6)

function abc(...val){
    console.log(val);
}
abc(1,2,3,4,5,6,7,8);*/

/*function abcd(){
    return 12;
}





let val= abcd();
console.log(val);*/


//# use rest parameter to accept any number of scores and return the total

/*function getScore(...score){
    let total=0;
    score.forEach(function(val){
        total= total+val;
    });
    return total;
}
console.log(getScore(10,20,30,40));*/

/*function discountcalculator(discount){
    return function(price){
    return price-price*(discount/100)
}
}
let ten= discountcalculator(10);
let twenty= discountcalculator(20);

console.log(ten(1200));*/

/*function counter(){
    let count=0;
    return function(){
        count++;
        return count;
    }
}
let c = counter();
 console.log(c());*/

 /*let fruit=['apple','banana','dragon fruit'];
    console.log(fruit[1]);*/

/*let fruit = ['App','gua'];
    fruit.push('mango');
    fruit.unshift('pinapple');

    console.log(fruit);*/

//#insert "red" and "blue" into the following array at index 1.

/*let colour= ['green','yellow'];
colour.splice(1,0,'red','blue');     **actually splice helps in removing but in this way
                                       it helps in adding too.
                                       here 1 represent index number and 0 indicates how many to be removed
console.log(colour);*/

//sort this array alphabetically and then reverse it.

/*let names =['yfy','tdy','adsd','zggv'];
console.log(names.sort().reverse());*/

//Use map to square each number

/*let numbers= [1,2,3,4,5];
let newnum= numbers.map(function(val){
    return val*val;
})
console.log(newnum);*/

//OBJECTS

//Access the value of "First name" from this object

/*let user = {
    Firstname:"Enakshi",
}
console.log(user[Firstname]);*/

//let a="anjan"
//console.log(a)

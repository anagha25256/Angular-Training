let studentName:string='Jack';
let studentAge:number=20;
let isCr:boolean=false;
let subjects:string[]=['DBMS','OS'];
let mytuple:[number,boolean,string];
mytuple=[5,false,'Welcome'];
enum Days{
    mon='monday',
    tue='tuesday',
    wed='wednesday',
    thurs='thursday',
    fri='friday',
    sat='saturday',
    sun='sunday'
}
console.log(studentName,studentAge);
console.log(isCr);
console.log(subjects);
console.log(mytuple);
console.log(Days)


-------------------------------------------------

/adding two numbers using function
let add =(firstNum:number,secondNum:number):number=>{
    let result:number=firstNum+secondNum;
    return result;

}
let output:number=add(2,7);
console.log(output)

//capitalizing the given string using function
let capitalize=(str:string):string=>{
    let r:string=str.toUpperCase();
    return r;
}
let finalstring:string=capitalize("Hello world");
console.log(finalstring)
-----------------------------------------------------------------
interface Person{
    name:string;
    age:number;
    email:string;
}
let user:Person={
    name:'Jack',
    age:21,
    email:'jack@gamil.com'
};
console.log(user)
------------------------------------------------------------------
class Car{
    make:string;
    model:string;
    year:number;
    displayInfo(){
        console.log('The car is make of '+this.make+'model of'+this.model +'in '+this.year)

    }
}
let car=new Car();
car.make='BMW';
car.model='BMW X1';
car.year=2021;
car.displayInfo();
---------------------------------------------------------------------------
function reverseArray<T>(arr: T[]):T[]{
    return arr.reverse();

}
let originalArray:number[]=[1,2,3,4,5];
let reversedArray:number[]=reverseArray(originalArray);
console.log(reversedArray);

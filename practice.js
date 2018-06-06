//Exercise 1

// function Automobile(wheels){
//     this.wheels = wheels
//     this.setColor = (color)=> {
//         this.color = color
//     }
//     this.getColor = ()=>{
//         return this.color
//     }
// }

// function Motorcycle(make, model, year){
//     this.make = make
//     this.model = model
//     this.year = year
// }

// Motorcycle.prototype = new Automobile(2)

// function Sedan(make, model, year){
//     this.make = make
//     this.model = model
//     this.year = year
//     this.door = 4
// }


// function Camry(){

// }
// Camry.prototype = new Sedan ("Toyota", "Camry", 2018)

// var toyota = new Camry ()
// console.log(toyota.wheels)
// console.log(toyota.door)
// toyota.year = 2018

// console.log(toyota.year)

//////////////////////////////////////////////////////////////////

class Automobile{
   constructor(wheels){
       this.wheels = wheels
    }
    setColor(color){
       this.color = color
    }
    getColor(){
       return this.color
    }
}

class Motorcycle extends Automobile{
    constructor(make, model, year){
        super(2)
        this.make = make
        this.model = model
        this.year = year
    }
}

class Sedan extends Automobile{
    constructor(make, model, year){

    }
}

class Maybach extends Sedan{
    constructor(){
        super("Maybach","c63","2018","$89,000","4","2")
    }
    method1(){
        return super () + "This is a" + this.name + "model" +this.model +"year"+this.year+"priced at"+this.price+"with"+this.seats+"seats and lastly"+ this.doors+"doors";
    }
    method2(){
        
    }
}



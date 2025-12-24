let a1 = {
    name:"shubham",
    age:18,
    language:"gujarati",
    run: ()=>{   // this is run because a is first executed.
        alert("run again")
    }
}

let p= {
    run: ()=>{
        alert("run")
    }
}
// multiple proto has been setted to next object.
p.__proto__ = {
    user: "dharmik"
}
a.run() // this is not work
a.__proto__ = p  // set the prototype of p into a
a.run() // this is workable
console.log(a.user)


// classes and objects

class myclass{
    submit(){
        alert(this.name+": your form is successfully submitted with ticket no "+this.ticketno)
    }
    cancel(){
        alert(this.name+": your from is cancelled. with ticket no "+this.ticketno)
    }
    fill(name,age,mo,ticketno){
        this.name = name
        this.age = age
        this.mo = mo
        this.ticketno = ticketno
    }
}

//// creating objects
let shubham = new myclass()
shubham.fill("shubham",18,586254786,125)
let shubham1 = new myclass()
shubham1.fill("shubham",18,586254786,130)
let kavya = new myclass()
kavya.fill("kavya",17,25685421,120)
let kavya1 = new myclass()
kavya1.fill("kavya",17,25685421,140)
shubham.submit()
shubham1.submit()
kavya.submit()
kavya1.cancel()
shubham1.cancel()

// constructors

class myclass{
    constructor(name,ticketno, address){
        this.name = name
        this.ticketno = ticketno
        this.address = address
    }
    submit(){
        alert(this.name+": your form is successfully submitted with ticket no "+this.ticketno)
    }
    cancel(){
        alert(this.name+": your from is cancelled. with ticket no "+this.ticketno)
        this.ticketno = 0
    }
}

//// creating objects
//let shubham = new myclass("shubham",120,"3,xyz,surat-395006")
//let kavya = new myclass("kavya",125,"4,abc,surat-395006")

//shubham.submit()
//kavya.submit()

// method overriding and super keyword.
class parent{
    constructor(){
        console.log("parent class constructors")
    }
    login(){
        console.log("logged in")
    }
    requestleave(leaves){
        console.log(`your leaves is ${leaves}`)
    }
}
class child extends parent{
    //constructor(...args){  when we not create our own constructor than automatically created by js engine.
    //    super(...args)
    //}
    constructor(){
        super() // must be called everytime.
        console.log("child class constructors")
    }
    requestleave(leaves){
        super.requestleave(3) // access parent class method
        console.log(`one leave extra,your leaves is ${leaves +1}`)
    }
}

let a2= new child()
a2.requestleave(3)

// static method
class a{
    constructor(name){
        console.log("this is constructors")
        this.name = a.run(name)
    }
    walk(){
        console.log(`${this.name} is now walking`)
    }
    static run(name){
        return name.charAt(0).toUpperCase() + name.substr(1,name.length)
    }
}

ad = new a("shubham")
ad.walk()
ad.run("yash")  // cannot work because run not a function


// getters and setters

class animal{
    constructor(name){
        this.name = name
    }
    get getname(){ // get the properties of the classes
        return this.name
    }
    set setname(newname){  // set the properties of classes
        this.name = newname
    }
}

class cat extends animal{
    eat(){
        console.log("eating...")
    }
}
let a = new animal("shubham")
//a.setname = "shubham"
console.log(a.getname)

// instance of
console.log(a instanceof animal)
let b=9 
let c = new cat()
//console.log(b instanceof animal)  // throws an errors
console.log(c instanceof animal)
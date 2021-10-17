// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name,id,email){
        this.name=name;
        this.id=id;
        this.email=email;
    }

    getName() {
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email
    }

    getRole(){
        return this.constructor.name;
    }
}

  const e = new Employee("Foo", 100, 'joe@joe.com');

// console.log(e);
// console.log(e.id);

console.log(e.getName());
console.log(e.getId());
console.log(e.getEmail());
console.log(e.getRole());
module.exports = Employee;
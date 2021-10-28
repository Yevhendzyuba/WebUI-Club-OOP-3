class Worker {
    #experience = 1.2;
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    showSalary() {
        let salary = this.dayRate * this.workingDays;
        console.log(this.fullName, salary);
    }
    showSalaryWithExperience() {
        let salaryWithExp = this.dayRate * this.workingDays * this.showExp;
        console.log(this.fullName , `money: ${salaryWithExp}`);
        return salaryWithExp;
    }
    get showExp() {
        return this.#experience;
    }
    set showExp(data) {
        this.#experience = data;
    }
}


const worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.showExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.money = worker1.showSalaryWithExperience();

const worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.showExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.money = worker2.showSalaryWithExperience();

const worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.showExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.money = worker3.showSalaryWithExperience();

const peopleArr = [worker1,worker2,worker3];


let sortedPeople = peopleArr.sort(function (a, b) {
    if (a.money > b.money) {
        return 1;
    }
    if (a.money < b.money) {
        return -1;
    } 
     return 0;
    
})

for (let i = 0;i<sortedPeople.length;i++){
    console.log(sortedPeople[i].fullName, sortedPeople[i].money);
}

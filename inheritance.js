'use strict';

(function employeesAndManagers() {
    console.log('Hi!')

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    function Employee(name, surname, job, salary) {
        Person.call(this, name, surname);
        this.job = job;
        this.salary = salary;
    }

    function Developer(name, surname, job, salary, specialization) {
        Employee.call(this, name, surname, job, salary);
        this.specialization = specialization;
    }

    function Manager(name, surname, job, salary, department) {
        Employee.call(this, name, surname, job, salary);
        this.department = department;
    }

    Employee.prototype = Object.create(Person.prototype);
    Employee.prototype.constructor = Employee;

    Developer.prototype = Object.create(Employee.prototype);
    Developer.prototype.constructor = Developer;

    Manager.prototype = Object.create(Employee.prototype);
    Manager.prototype.constructor = Manager;


    Person.prototype.getFullName = function() {
        return this.name + ' ' + this.surname;
    }
    
    Employee.prototype.getData = function() {
        return this.getFullName() + ' ' + this.salary;
    }

    Employee.prototype.getSalary = function() {
        return this.salary;
    }

    Employee.prototype.increaseSalary = function() {
        var increase = this.salary + ((this.salary*10)/100);
        return increase;
    }

    Developer.prototype.getSpecialization = function() {
        return this.specialization + '';
    }

    Manager.prototype.getDepartment = function() {
        return this.department + '';
    }

    Manager.prototype.changeDepartment = function(department) {
        return department + '';
    }


    var person = new Person('Pera', 'Markovic');
    var empolyee = new Employee('Pera', 'Markovic', 'Programer', 500);
    var developer = new Developer('Pera', 'Markovic', 'Programer', 500, 'Programing')
    var manager = new Manager('Pera', 'Markovic', 'Programer', 500, 'IT');

    console.log(person.getFullName())
    console.log(manager.getData());
    console.log(empolyee.getSalary());
    console.log(empolyee.increaseSalary());
    console.log(empolyee.getData());
    console.log(developer.getSpecialization());
    console.log(manager.changeDepartment());
    console.log(manager.getDepartment());


})()
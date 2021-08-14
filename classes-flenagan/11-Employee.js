class Employee {
    constructor (firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    get fullname () {
        return `${this.firstname} ${this.lastname}`;
    }

    get email () {
        return `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`;
    }
}
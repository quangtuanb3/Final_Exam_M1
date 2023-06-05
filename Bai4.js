function Staff(fullName, email) {
    this.fullName = fullName;
    this.email = email;
    this.setFullName = function (fullName) {
        this.fullName = fullName;
    }
    this.getFullName = function () {
        return this.fullName;
    }
    this.setEmail = function (email) {
        this.email = email;
    }
    this.getEmail = function () {
        return this.email;
    }
    this.toString = function () {
        return `Full name: ${this.fullName}; Email: ${this.email}`;
    }
}

let david = new Staff("David", "david@gmail.com");
david.setFullName("David Do");
david.setEmail("david.do@gmail.com");

let davidInfo = david.toString();
console.log('David information: ' + davidInfo);

let Staffs = new Array(3); 
Staffs.push(david);
Staffs.push(new Staff("Petter Parker", "Petter.Parker@gmail.com"), new Staff("Marry Jane", "Marry.Jane@gmail.com"));

Staffs.forEach((staff, index) => {
    console.log(staff.toString());
})
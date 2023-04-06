                                                            // EXCERCISE 1, 2, 3, 4
class User {
    constructor(name, login, age){
        this.name = name;
        this.login = login;
        this.age = age;
    }
    getName(isAdmin){
        isAdmin ? console.log((this.name || this.login)) : console.log("Permission denied");
    }
    changeName(newName, password){
        let oldName;
        password == 123 ? (oldName = this.name, this.name = newName, 
            console.log(`Name Changed from ${oldName} to ${this.name}`)) : console.log("Permission denied");
    }
}
let user1 = new User('Mike', 'MK_18', 18);
let user2 = new User('', 'NRG', 22);

console.log(user1.login);               // to test Excercise 1
console.log(user1.age);
console.log(user2.login);
console.log(user2.age);

user1.getName(true);               // to test Excercise 2
user2.getName(true);
user2.getName(false);

user1.changeName('Bill', '123');               // to test Excercise 3

class Admin extends User{
    #isAdmin = true;
    getUserName(user){
        user.getName(this.#isAdmin);
    }
}

let admin = new Admin();               // to test Excercise 4
admin.getUserName(user1);               // !!! console output "Bill" due to changes in Excercise 3 !!!



                                                            // EXCERCISE 5
// class User {
//     #phone;
//     constructor(name, phone){
//         this.name = name;
//         this.#phone = phone;
//     };

//     getPhone(isAdmin){       
//         this.phoneArr = this.#phone.split('');                        // normal
//         isAdmin ? console.log(this.#phone) : console.log(`${this.phoneArr[0]}${this.phoneArr[1]}${this.phoneArr[2]
//         }-******-${this.phoneArr[11]}${this.phoneArr[12]}`)
//     }

//     // getPhone(isAdmin){                                              // harder
//     //     if (isAdmin){
//     //         console.log(this.#phone);
//     //     }else{
//     //         this.phoneArr = this.#phone.split('');
//     //         this.newPhoneNum = [];
//     //         for (let i = 0; i < this.phoneArr.length; i++){
//     //             i < 4 || i > 9 ? this.newPhoneNum.push(this.phoneArr[i]) : this.newPhoneNum.push('*');
//     //         }
//     //         this.newPhoneNumStr = this.newPhoneNum.join('');
//     //         console.log(this.newPhoneNumStr);
//     //     }
//     // }
// }

// let user1 = new User('Mike', '067-888-88-99');
// let user2 = new User('Tom', '099-888-88-99');
// user1.getPhone(false);
// user2.getPhone(false);
// user1.getPhone(true);
// user2.getPhone(true);
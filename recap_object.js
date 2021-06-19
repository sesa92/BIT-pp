// var user = {
//     username: 'pera',
//     password: '12345',
//     email: 'pera@gmail.com',
//     age: 25,
//     isAdmin: false
// };

// console.log(user);
// console.log(typeof user);
// console.log(user.username);
// // console.log(user['username']);

// var propertyName = 'email';
// console.log(user[propertyName]);

// user.password = 'abcde';

// user.address = {
//     street : 'Neka ulica',
//     streetNumber: 34,
//     city: 'Beograd'
// }

// console.log(user);
// console.log(user.address);
// console.log(user.address.city);


var x = 10;
var y = '10';

console.log(x == y);


var user1 = {
    username: 'pera',
    password: 123
};

var user2 = {
    username: 'pera',
    password: '123456'
};

var user3 = user2;

console.log(user3);

// 
function change (obj) {
    obj.x += 10;
    console.log(obj.x);
}

var obj = {x: 5};
change(obj);
console.log(obj);

function User(username, password) {
    //this = {}

    this.username = username;
    this.password = password;
    
    this.changePassword = function(newPassword) {
        this.password = newPassword;
    }
    // return this;
};

var user = new User('pera', '123');
console.log(user);
user.changePassword('abcd');
console.log(user);
// ako ne stavimo new ispred funkcije parametri postaju globalne varijable
// console.log(username);

var user = {
    username: 'pera',
    password: '1234',
    changePassword: function(newPassword) {
        this.password = newPassword; // moze i user.password ali stavlja se this za slucaj da se ime varijable promeni
    }
};


var x = 6;
var y = 5;

var obj = {
    x: 6,
    y: 8,
    sum: function(x, y) {
        return this.x + this.y; // ako ne stavimo this ispred x i y uzima vrednost iz globalnog scope-a
    }
};

console.log(obj.sum(2, 3));// ako ima this ispred x i y uzima vrednost iz localnog scopa ne iz napisane funcije(2,3)

// var obj = {
//     x: 1,
//     y: 5
// };

 
// var obj = {}; isto kao i var obj = new Object(); 
var obj = new Object();

Object.defineProperty(obj, 'x', {
    value: 1,
    writtable: false, // ne moze se menjati property
    enumerable: true // ako se stavi false nece ispisati x
});

Object.defineProperty(obj, 'y', {
    value: 5,
    writtable: true,
    enumerable: true
});

// obj.x = 10; // ne moze se menjati na read-only property

console.log(obj);

for (property in obj) {
    console.log(property, obj[property]);
}

Object.freeze(obj); // nije moguce u daljem radu menjati svojstva niti dodavati ili brisati


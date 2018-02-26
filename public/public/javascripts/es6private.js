/* var btn = document.querySelectorAll('button');
//作用域为全局
for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
        alert('当前点击' + i);
    }
}

//采用闭包改变作用域
for (var i = 0; i < btn.length; i++) {
    (function (i) {
        btn[i].onclick = function () {
            alert('当前点击' + i);
        }
    })(i)
}

// 采用es6的let
let btn = document.querySelectorAll('button');
for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
        alert('当前点击' + i);
    }
} */
// class语法糖
/* class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    print() {
        console.log("我叫"+this.name+",我今年"+this.age);
    }
}

let person = new Person("周培",18);

console.log(person);
person.print();
 */
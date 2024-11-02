
//stack memory : to save local memory
//heap memory : storing data structure with high memory
// life of stack end when } or return comes

//====================================================================================

// function add(a, b) { 
//     function myAdd() {
//         const c = a + b;
//         return c;
//     }
//     return myAdd();
// }

// function main() {
//     const res = add(3,4)
//     console.log(res);
// }

// main();

//========================================================================================

// function add(a,b) {
//     function myAdd() {
//         const c = a + b;
//         return c;
//     }
//     return myAdd;
// }
// //here we returned the function without calling it 

// function main () {
//     const res = add(3,4);
//     const val = res();
//     console.log(val);
// }

// main();

//oru function call cheyyumbozhaanu aa functionte stack undaavunnath

/*closure :  oru enclosing function (function inside a function) ne athinte parent function nte variable access
cheyyaan js use cheyyunna oru reethiyaanu closure 

function value save aavunnath heap il aanu, athkondaanu stack clear aayittum aa variable print aavunnath
console.dir(res) enn type cheythal closure kaanan pattum*/

//===================================================================================

//Example of closure usecase
const objs = [
    { name: 'One', msg: "Hello I am one" },
    { name: 'Two', msg: "Hello I am two" },
    { name: 'Three', msg: "Hello I am three" },
];

function main() {
    objs.forEach((item) => {
        const bt = document.createElement('button');
        bt.innerHTML = item.name;
        bt.onclick = getCallBack(item.msg);
        document.body.appendChild(bt);
    });
}

function getCallBack(arg) {
    return () => {
        alert(arg)
    }
}
// Ensure main() runs only after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", main);


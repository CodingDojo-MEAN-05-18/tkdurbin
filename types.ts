var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr: number [] = [1,2,3,4];
var myObj: object = { name:'Bill'};
var anythingVariable: any = "Hey";
var anythingVariable: any = 25; 
var arrayOne: boolean[] = [true, false, true, true];
type mixed = (string | number | boolean);
var arrayTwo:mixed[] = [1, 'abc', true, 2];
var myObj: object = { x: 5, y: 10 };
// object constructor
var MyNode = (function () {
    function MyNode(val) {
        this.val = 0;
        this.val = val;
    }
    MyNode.prototype.doSomething = function () {
        this._priv = 10;
    };
    return MyNode;
}());
var myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);
function myFunction() {
    console.log("Hello World");
    return;
}
function sendingErrors() {
	throw new Error('Error message');
}


constconst myNum myNum:: number  number ==  55;;
 constconst myString myString:: string  string ==  "Hello Universe""Hello Uni ;
const myArr: Array<number> = [1,2,3,4];

let myObj: { [key: string]: (string | number) } = { name: 'Bill' };

let anythingVariable: any = "Hey";
anythingVariable = 25;

const arrayOne: boolean[] = [true, false, true, true];
const arrayTwo: (number | string | boolean)[] = [1, 'abc', true, 2];

myObj = { x: 5, y: 10 };

// class

class MyNode {
  private _priv: number;

  constructor(public val: number) {}

  doSomething(): void {
    this._priv = 10;
  }
}

const myNodeInstance: MyNode = new MyNode(1);

console.log(myNodeInstance.val);

function myFunction(): void {
    console.log('Hello World');
    return;
}
function sendingErrors(): never {
	throw new Error('Error message');
}
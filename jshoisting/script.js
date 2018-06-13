/*
//1
console.log(hello);                                   
var hello = 'world';

//var hello declared
//console.log(hello); hello undefined error


//2
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}

//Given
//function test(){
	//var needle = 'magnet'; needle replaced with magnet
	//console.log(needle); magnet console.logged
//}



//3

var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);

//Given
//function print(){
	//brendan = 'only okay';
	//console.log(brendan); function never called
//}
//console.log(brendan); super cool console.logged



//4

var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
    var food = 'gone';
}
//Given
//function eat(){ function hoisted
	//food = 'half-chicken'; food replaced 
	//console.log(food); 
    //var food = 'gone';
//}
//console.log(food); chicken console.logged
//eat(); function called
//half-chicken console.logged



//5
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

//parse error mean function undefined


//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);

//genre undefined
//genre declared
//function rewind() { function hoisted
	//genre = "rock"; genre replaced
	//console.log(genre);
	//var genre = "r&b";
	//console.log(genre);
//}
//console.log(genre);
//rewind(); function called
//console.log(genre);


//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
//Given
//function learn() { function hoisted
	//dojo = "seattle";
	//console.log(dojo);
	//var dojo = "burbank";
	//console.log(dojo);
//}
//console.log(dojo); san jose console.logged
//learn(); function called
//seattle and burbank console.logged
//console.log(dojo); san jose console logged again
*/

//8

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
    }
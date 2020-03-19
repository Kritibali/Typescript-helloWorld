function doSomething(){
	for(let i=0;i<5;i++){
	console.log(i);
	}
}
doSomething();

enum Color {Red,Green,Blue};
let BackgroundColor=Color.Red;
console.log(BackgroundColor);

let message;
message="abc";
let endsWithC=message.endsWith("c");

let log=function(message){
	console.log("Hello Log "+message );
}
let doLog=(message)=>{
	console.log("Hello "+message);
}
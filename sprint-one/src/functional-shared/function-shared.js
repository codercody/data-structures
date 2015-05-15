var Car = function(loc){
	var obj = {loc:loc};
	obj.move = move;
	return obj;
}
var move = function(){
	this.loc++;
};


console.log(Car(8));
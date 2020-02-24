
// You should implement your task here.

module.exports = function towelSort (arr) {
	let arr2 = [];
	let i=1;
	if(arr == undefined || arr.length == 0) return [];
	else {
while(i<arr.length){
	arr[i].reverse();
	i+=2;
}
arr2 = arr.join(',').split(',');
arr = arr2.map(item => Number(item));
console.log(arr,arr2);
return arr;
	}
}

const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let currsub=[];
	let result=[];
	let currsum=0;
	for(let i=0; i<arr.length; i++){
		if(currsum+arr[i]<=n){
			currsub.push(arr[i]);
			currsum+=arr[i];
		}else{
			result.push([...currsub]);
			currsub=[arr[i]];
			currsum=arr[i];
		}
	}
	if(currsub.length>0){
		result.push([...currsub]);
	}
	return result;
};
const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));

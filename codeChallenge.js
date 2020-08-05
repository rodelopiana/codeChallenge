let input = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
let sortedArray = input.sort((a,b)=>a-b);


const arraySort = (arr) => {

	let counter = 0;
	arr.forEach((num,i)=> {
		if (arr[i] === arr[i + 1]) {
			counter++;
		} else if (arr[i] !== arr[i + 1] && arr[i] === arr[i - 1]) {
			arr[i - counter] = arr.slice(i - counter, i + 1);
            counter = 0;
        }
  		console.log(arr[i],arr[i+1],arr[i] === arr[i + 1]);
    });

    arr.forEach(function(num, ind) {
    	while (arr[ind][0] && arr[ind][0] === arr[ind + 1]) {
    		arr.splice(ind + 1, 1);
    	}
    });
    return arr;
}


arraySort(sortedArray);

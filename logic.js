let data = [2, 7, 4];
let index = 0; 
let result = 0;

while (index < data.length) {


  if (data[index] % 2 === 0) {
    result = result + data[index];
  }
	//2
  index = index + 1;
}

for (let i = 0; i < 2; i++) {
  result = result + 1;
}
//what result would be printed into the console? 
console.log(result);

const delayPrint = (arr) => {
  if (arr.length > 0) {
    //console.log(arr, arr.slice(1))
    setTimeout(() => {
      process.stdout.write(`${arr[0]}`);
      delayPrint(arr.slice(1));
    }, 50);
  } else {
    console.log();
  }
};

const sentence = "hello there from lighthouse labs";
const charArr = sentence.split('');
delayPrint(charArr);
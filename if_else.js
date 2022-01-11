var arr = ['a', 'b', 'c', 'd'];
for (const key in arr) {
    console.log(arr[key]);
     if (arr[key] == 'b') {
        console.log("Its b");
    }
   
    else {
        console.log("Its not b");
    }
}
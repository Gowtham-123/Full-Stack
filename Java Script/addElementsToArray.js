function fizzBuzz(){
    
    if(count % 3 === 0 && count % 5 === 0){
        output.push("FizzBuzz");
    }else if(count % 3 === 0){
        output.push("Fizz");
    }else if(count % 5 === 0){
        output.push("Buzz");
    }else{
        output.push(count);
    }
    count++;
}
while(count <= 100){
        fizzBuzz();
    }
console.log(output);
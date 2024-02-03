function whosPaying() {
    
    /******Don't change the code above*******/
        
        //Write your code here.
    var list = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
    var number = Math.floor(Math.random() * list.length);
    return list[number];
    
    /******Don't change the code below*******/    
    }
    
    var todayLunch = whosPaying();
    console.log(todayLunch + " is going to buy lunch today.");
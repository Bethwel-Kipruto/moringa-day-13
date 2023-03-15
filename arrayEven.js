function evenArray() {
    
    var numbers=[44, 26, 48, 64, 27, 53];
      
  
    var even = [];
    var i = 0;
    while(i < numbers.length) {
           if (numbers[i] % 2 == 0)
           even.push(numbers[i]);
           i++;
    }
      
   
    console.log(`Even numbers in an array are: ${even}`)
        
    }

    evenArray()
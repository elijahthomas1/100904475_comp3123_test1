const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

function lowerCaseWords (theArray) {

    let p1 = new Promise(function (resolve, reject) {
        
            if(theArray) {
                function checkString(stri) {
                    if( typeof stri === 'string') {
                        return stri;
                    };
                }
                let newArr = theArray.filter(checkString);
                for (let x in newArr) {
                    x2 = x.toString();
                    x3 = x2.toLowerCase();
                    x = x3;
                }
                //let theString = newArr.toString();
                console.log(newArr);
                resolve("array filtered");
                
            } else {
                reject("No array given!");
            }
        
    });   
    p1.then(function(theArray) {
        console.log(theArray)
    }, function(error) {
        console.log(error)
    })
}

lowerCaseWords(mixedArray);


//I was having issues with determining whether or not I installed all the correct packages
//So I looked at egkallas's code to see if we had a similarly working function

function sum(a) {

    //initialize sum var
    var sum = 0

    //if there is no length to array, return 0
    if(a.length == 0){
        sum = 0;
    }
    //if the array length is 1, then the sum is the first value in array
    else if(a.length == 1){
        sum = a[0];
    }
    //else, take the sum of every element in the array
    else{
        for(var i = 0; i < a.length; i++) {
            sum += a[i];
        }
    }

    return sum;
}

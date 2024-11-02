function one(){
    var a = 100;
    two(a);
    console.log('one', a)

}

function two(a){
    a = a+1
    console.log('two',a)
}

one();

/* Output two 101
          one 100

ivide ee change reflect aavathathinte kaaranam, function one il ulla a nte value maathrame athinullil call 
cheythal varu. two il vanna change function one il varilla */

// Now we can use an object istead of integer 
function three() {
    var a = {
        value : 200
    }
    four(a);
    console.log('three', a.value);
}

function four(a){
    a.value = a.value + 1;
    console.log('four', a.value);
}

three();

// Here the change reflected in the function three 

//Now we use array instead of object 
function five() {
    var a = [300]
    six(a);
    console.log('five', a[0]);
}

function six(a){
    a[0] = a[0] + 1;
    console.log('six', a[0]);
}

five();


/*  In both cases  change reflect in the first function(function five and three) . because  integer value variable
il assign cheyyumbo ath stackil aan save aavuka(value) so oru function vilich athinte closing } or return kandal aa stack clear aavum
appol ath mele ulla function nu reflect aavilla. Pakshe array or object nte case il ith save aavunnath heap
 memory il aanu. athinte reference maathramanu stackil save cheyyunnath, so enthelum change vannal athinte 
 value koodi effect aavm. Ithaan call by value(low space datatype like integer and float) and call by
reference(high space datatype */



function a(alpha, beta){
    let x = alpha;  // 1
    let y = beta;   // 2
    function b(){
        x = x+y; // x = 3/11/27 , y = 2/8/16, 
        console.log("Xb ",x);
        console.log("Yb ",y);
        console.log();
        function c(){
            y = x + 5; // x=3/11/27 , y = 8/16/32
            console.log("Xc ",x);
            console.log("Yc ",y);
            console.log();
            return y;
        }
        return c;
    }
    return b;
}

const c1 = a(1,2);
console.log(c1()(),c1()(),c1()());
//124나라
// 자연수만 존재
// 1,2,4만 사용
// 1을 1
// 2를 2
// 6을 14
function solution(n) {
    //         1 2 3   4 5  6  7   8   9  10   11 12
    // 1 2 0   1 2 10 11 12 20 21 22 100 101 102 110  111
    // 1 2 4   1 2 4  11 12 14 21 22  24 41  42   44  111

    var a = [1,2,4];
    let sum = 0
    let length = 0
    let dap=[];
    while(true){
        
        sum1 = sum//합
        sum += Math.pow(3,length)//3

        console.log("sum",sum,"n",n)
        if(sum>n){
            console.log("length",length)
            break
        }
        length += 1
    }

    3의 length승
    3의 length-1승
    while(n<=0){
        n= n-Math.pow(3,length)//3=12-9 
    
    
    }
        //1 2 4 11 12 14 21 22 24 41 42 44 111(13)
    // n-1
    // 11 
    // 12 3+9
    // 13 1+3+9
    // 4부터 렝스가 2  3^0+3^1
    // 13부터 렝스가 3 3^0+3^1+3^2
    // 40부터 렝스가 4 3^0+3^1+3^2+3^3
   
}
    
console.log(solution(12))
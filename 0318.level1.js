
//자연수 n을 연속된 자연수의 합으로 표현

function solution(n) {
    let count=0;
    for(let j=1;j<n+1;j++){
        let sum = 0
        for(var i=j;i<n+1;i++){
            sum += i;
            if(sum==n){
                count = count +1
            }
            if(sum>n){
                break
            }
        }
    }
    return count;
}
console.log(solution(15))
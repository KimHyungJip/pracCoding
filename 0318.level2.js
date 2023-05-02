function solution(n, left, right) {
    const answer=[]
    for(let i=1;i<=n;i++){
        var firstNum = i
        let count=0
        for(let j=0;j<n;j++){
            if(firstNum<=count){
                firstNum++
            }
            if(n*(i-1)+j>=left){

                answer.push(firstNum)
            }
            count++

            if(n*(i-1)+j==right){
                return answer
            }
        }
    }
   
    return answer;
}

console.log(solution(3,2,5)) 
// 1234
// 2234
// 3334
// 4444


// n행 n열 크기 2차원 배열
// 1 2 3
// 2 2 3
// 3 3 3 
// 1 2 3 2 2 3 3 3 3


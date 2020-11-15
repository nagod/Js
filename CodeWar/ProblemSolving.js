// Task: Sort Sentence via number asc. 
/*
* "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
* "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
* ""  -->  ""
*/

function order(words){
  const sentence = words.split(' ');
  const sortedSentence = new Array();
  
  for(let i=1; i <= sentence.length; i++){
    sortedSentence.push((sentence.filter(word => word.includes(i))));  
  }
  return sortedSentence.join(' ');
}

/*
*Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
*Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)
*/

function solution(number){
  
  let sum = 0;
  
  for(let i=0;i <number; i++){
    if(i % 3 ==0  || i % 5 ==0){
      sum +=i;
    }
  }
  return sum;
}

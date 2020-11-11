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

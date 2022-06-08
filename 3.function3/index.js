function alphabetSort(message){
  // wirte your code here
  var strArray = message.split("");
  strArray=strArray.sort();
  var str =strArray.join("");
  console.log(str);
}
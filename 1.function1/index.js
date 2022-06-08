function reverseString(message){
  // wirte your code here
  var spStr =message.split("");
  var reverseArray = spStr.reverse();
  var reStr = reverseArray.join("");
  return reStr;
}
reverseString('hello');
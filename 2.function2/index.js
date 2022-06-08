function palindrome(message){
  // wirte your code here
  var str;
  for(var i=message.length-1;i>=0;i--){
	  if(str){
	  str=str+message[i];
	  }else{
		  str=message[i];
	  }
  }
  if(str==message)
	  return true;
  else
	  return false;
}
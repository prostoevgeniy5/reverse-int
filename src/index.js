module.exports = function reverse (n) {
    var result = 0;
    var temp;
    if(n < 0) {
        temp = (-1 * n).toString().split('');
    } else {
        temp = n.toString().split('');
    }

  for(var i = 0; i < temp.length; i++) {
    result += Number(temp[i]) * Math.pow(10, i)

  }
  return result;
}

function getEle(id) {
    return document.getElementById(id);
  }


/////////// bài 1////////////////////
function tableNumber(){
var arrTableNumber = [];
var result = "";

for (var i = 0; i < 10; i++) {
  for (var k = 1; k <= 10; k++) {
    result += i * 10 + k + " ";
  }
  result += "<br>"; 
}

arrTableNumber.push(result); 
getEle("printTableNumber").innerHTML = arrTableNumber.join("");
getEle("printTableNumber").style.color = "#4463b9";
}

///////////// bài 2 //////////////////
function filterPrime() {
    var filterPrime = [];
    var prime = getEle("prime").value;
    var flag = true;

    if (prime > 2){
      flag = true;
    } else {
        for (var i = 2; i <= parseFloat(prime)/2; i++) {
          if (prime % i === 0) {
            flag = false;
            return;
          }
        }
      filterPrime.push(parseFloat(prime[i]));   
      console.log(filterPrime);
      }

    if (flag == true){
      getEle("printFilterPrime").innerHTML = "Số nguyên tố là: " + filterPrime;
    }
    if (flag == false){
    }
    getEle("printFilterPrime").style.color = "#4463b9";
}


///////////// bài tập 3 ///////////////
function sumN() {
    var n = getEle("parameterN").value;
    var s = 2;
    var total;

    for (var i = 3; i <= n; i++) {
      s += i;
    }

    total = s + 2 * parseFloat(n);

    getEle("printCountN").innerHTML = "Tổng (2 + 3 + 4 +..." + n + ") + 2 * " + n + " = " + total;
    getEle("printCountN").style.color = "#4463b9";
}

/////////////// bài 4 //////////////////
function countSivisor() {
    var count = 0;
    var n = getEle("divisorN").value;
    for (var i = 1; i <= parseFloat(n); i++) {
      if (parseFloat(n) % i === 0) {
        count++;
      }
    }
    // getEle("printDivisorN").innerHTML= n;
    getEle("totalDivisorN").innerHTML = "Số lượng ước số của " + n +" là " + count;
    getEle("totalDivisorN").style.color="#4463b9";
  }

///////////////// bài 5 //////////////////
function RevertInteger() {
    var n = getEle("interger").value;
    var list = [];
    for (var i = n.length - 1; i >= 0; i--) {
      list.push(n[i]);
    }
    n = list;
    getEle("printRevert").innerHTML = "n đảo ngược thành " + n.join("");
    getEle("printRevert").style.color = "#4463b9";
  }

//////////////////// bài 6 /////////////////
function findNMax() {
    var s = 0;
    for (var i = 1; i <= 100; i++) {
      s += i;
      if (s <= 100) {
        getEle("printFindNMax").innerHTML = "n = " + i;
        getEle("printFindNMax").style.color = "#4463b9";
      }
    }
  }

///////////////////// bài 7 //////////////////

function multiplicationTable(){
  var arrMultiNumber = [];
  var multiNumber = getEle("multiNumber").value;
  var result;
  var table = "";

    for(i = 1; i <= 9; i++) {
    result = multiNumber * i;
    table = multiNumber + " x " + i + " = " + result + "<br>";
    arrMultiNumber.push(table);
    }

  getEle("printMultiTable").innerHTML = arrMultiNumber.join('');
  getEle("printMultiTable").style.color = "#4463b9";
} 

////////////////// Bài 8 ///////////////////
function playCards(){
  var arrOne = [];
  var arrTwo = [];
  var arrThree = [];
  var arrFour = [];
  var cards = ["4K", "KH", "5C", "KA", "QH", "KD", "2H", "10S",
  "AS", "7H", "9K", "10D"];
  for(i = 0; i < cards.length; i+=4){
    arrOne.push(" " + cards[i]);
    arrTwo.push( " " + cards[i+1]);
    arrThree.push( " " + cards[i+2]);
    arrFour.push( " " + cards[i+3]);
  }
  getEle("players").innerHTML = "Player 1: " + arrOne + "<br>" + "Player 2: " + arrTwo + "<br>" + "Player 3: " + arrThree + "<br>" + "Player 4: " + arrFour;
  getEle("players").style.color = "#4463b9";
}


/////////////////// Bài 9 ////////////////////

/////////////////// Bài 10 ///////////////////
function angleBetweenHoursAndMinutes(){
  var h = getEle("hour").value;
  var m = getEle("minutes").value;

  // 1 phút kim phút quay được = 360/60 = 6 độ
  // 1 giờ kim giờ quay được = 360/24 = 30 độ
  // 1 phút kim giờ quay được = 30/60 = 0.5 độ

  var angle = Math.abs((parseFloat(m) * 6) - (0.5 * (parseFloat(h) * 60 + parseFloat(m))));

  getEle("printAngle").innerHTML = "Vào lúc " + h + " giờ " + m + " phút " + "<br>" + "Giữa kim giờ và kim phút sẽ tạo ra 1 góc " + angle + "°";
  getEle("printAngle").style.color = "#4463b9";

}


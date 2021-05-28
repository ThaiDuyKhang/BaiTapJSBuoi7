function getEle(id) {
    return document.getElementById(id);
  }


/////////// bài 1////////////////////
//Tạo biến bảng = rỗng
function tableNumber(){
var table = "";

for (var i = 0; i < 10; i++) {
  for (var k = 1; k <= 10; k++) {
    table += i * 10 + k + " ";
  }
  table += "\n";
}

console.log(table);
getEle("printTableNumber").innerHTML = "Ctrl + Shift + I" + "<br>" + "=> Tab console => Xem kết quả bài 1";
getEle("printTableNumber").style.color = "#4463b9";
}
// }


///////////// bài 2 //////////////////
var listPrime = [];


  function addPrime() {
    var prime = getEle("prime").value;
    var convertedPrime = prime.split(",");
    for (var i = 0; i < convertedPrime.length; i++) {
      listPrime.push(parseFloat(convertedPrime[i]));
    }
    console.log(listPrime);
  }

  function filterPrime(prime) {
    var filterPrime = [];

    for (var i = 0; i < listPrime.length; i++) {
        if (listPrime[i] > 2 && prime/prime === 1){
          filterPrime.push(parseFloat(listPrime[i]));
        } 
      }
    getEle("printFilterPrime").innerHTML = "Số nguyên tố là: " + filterPrime;
    getEle("printFilterPrime").style.color = "#4463b9";
}

///////////// bài tập 3 ///////////////
function sumN() {
    //Nhập tham số n
    var n = getEle("parameterN").value;
    //Công thức tính tổng bắt đầu từ 2
    var s = 2;
    //Vòng lặp tính tổng từ 2 -> n
    for (var i = 3; i <= n; i++) {
      s += i;
    }
    //Lấy tổng vòng lặp cộng với 2n 
    total = s + 2 * parseFloat(n);

    //In kết quả
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
  var multiplicationNumber = getEle("multiNumber").value;
  var result = "";
    for(i = 1; i <= 9; i++) {
    result = multiplicationNumber * i + "\n" ;
    console.log(multiplicationNumber + "x" + i + " = " + result);
		getEle("printMultiplicationTable").innerHTML = "Ctrl + Shift + I" + "<br>" + "=> Tab console => Xem kết quả bài 7";
    getEle("printMultiplicationTable").style.color = "#4463b9";
	}
} 
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


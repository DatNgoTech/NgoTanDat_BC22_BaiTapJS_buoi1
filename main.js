/*
console.log("Hello Cybersoft");
console.log("Dinh Phuc Nguyen");
*/
//alert("Well come!");

/**
 * Biến
 * = là phép gán
 *
 * Kiểu dữ liệu
 *  - string
 *  - number
 *  - boolean: true/false
 *  - undefined: Tạo ra biến mà k gán giá trị
 *  - null
 */

var username = "Nguyen";
console.log(username);

var numberStudent = 30;
console.log(numberStudent);

//Khai bao bien
var tong;
console.log(tong);
//gan gia tri cho bien
tong = 100;
console.log(tong);

var isLogin = false;
console.log(isLogin);

var address = null;
console.log(address);

/**
 * Các loại toán tử
 * (+) cộng số/ nối chuỗi
 * - * / %
 * (++) tăng 1 đơn vị
 * (--) giảm 1 đơn vị
 */
var number1 = 10;
var number2 = 5;

var cong = number1 + number2;
console.log(cong);

var hieu = number1 - number2;
var ketQuaHieu = "Hieu la: " + hieu;
console.log(ketQuaHieu);

var nhan = number1 * number2;
var ketQuaNhan = "Nhan la: " + nhan;
console.log(ketQuaNhan);

var chia = number1 / number2;
var ketQuaChia = "Chia la: " + chia;
console.log(ketQuaChia);

var chiaLayDu = number1 % number2;
var ketQuaChiaLayDu = "Chia lay du la: " + chiaLayDu;
console.log(ketQuaChiaLayDu);

var count = 0;
// var newCount = count + 1;
//var newCount = ++count; //Cộng trước gán sau
var newCount = count++; //Gán trước cộng sau
console.log(newCount);

// += -= *= /= %=
var sum = 0;
// sum = sum + 1;
sum += 1;
console.log(sum);

var a = 3;
var b = 1; // a = 3; b = 1
a += b; // a = 4; b = 1
b = b++ + a++; // b = 5; a = 5
console.log(a, b);

//Hang so
// var pi = 3.14;
const PI = 3.14;

/**
 * Tam giac vuong
 *
 * * Đầu vào:
 *  - canh 1
 *  - canh 2
 * * Xử lý:
 *  - Tạo 3 biến edge1 edge2 edge3
 *  - Gán giá trị cho cạnh edge1 edge2
 *  - edge3 = Bình phương cạnh edge1 + Bình phương cạnh edge2
 *  - Can bac 2 cho bien edge3 => Math.sqrt()
 * * Đầu ra: thông báo kết quả
 */
var edge1;
var edge2;
var edge3;

edge1 = 3;
edge2 = 4;

edge3 = Math.sqrt(edge1 * edge1 + edge2 * edge2);

var ketQua = "Canh huyen la: " + edge3;
console.log(ketQua);

/**
 * Tinh tong 3 ky số: n = 123 | 1 + 2 + 3 => 6
 * * Đầu vào
 *  - số n: Tạo biến n gán số có 3 ký số
 * * Xử lý
 *  - Tách số hàng đơn vị: n%10
 *  - Tách số hàng chục: Math.floor(n%100/10)
 *  - Tách số hàng trăm: Math.floor(n / 100)
 *  - đơn vị + hàng chục + hàng trăm => Tổng 3 ký số ?
 * * Đầu ra: show kết quả
 */
var n = 123;
var hangDV = n % 10;
var hangChuc = Math.floor((n % 100) / 10);
var hangTram = Math.floor(n / 100);
var tongKySo = hangDV + hangChuc + hangTram;
console.log("Tong 3 ky so la: " + tongKySo);

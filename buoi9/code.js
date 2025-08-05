// // Dùng DOM để truy cập vào các phần tử html theo class
// let arrTest = document.getElementsByClassName('test');
// // trả ra mảng đối tượng là các phần tử html trong class test
// console.log(arrTest);

// // in ra giá trị của phần tử mà mình mong muốn
// console.log(arrTest[1].outerText);

// // in ra tất cả các phần tử
// for(let item of arrTest){
//     console.log(item.outerText);
// }

// // thay đổi phần tử thứ 2 thành màu đỏ
// arrTest[1].style.color = "red";

// let arrTest2 = document.getElementsByClassName('test2');
// arrTest2[1].style.color = "blue";


// Dòng DOM để truy vấn các phần tử HTML theo ID
function mySubmit(){
    let ten = document.getElementById('name');
    let tuoi = document.getElementById('age');
    let tinh = document.getElementById('city');

    console.log(ten.value);
    console.log(tuoi.value);
    if(tinh.value == 1){
        console.log("Hà Nội")
        var queQuan = "Hà Nội";
    }else if(tinh.value == 2){
        console.log("TPHCM")
        var queQuan = "TPHCM";
    }else if (tinh.value == 3){
        console.log("Đà Nẵng");
        var queQuan = "Đà Nẵng";
    }

    // chèn chuỗi HTML
    let result = `
        <tr>
            <th>Tên</th>
            <th>Tuổi</th>
            <th>Tỉnh thành</th>
        </tr>
        <tr>
            <td>${ten.value}</td>
            <td>${tuoi.value}</td>
            <td>${queQuan}</td>
        </tr>
    `;

    let ketQua = document.getElementById('ketQua');
    ketQua.innerHTML = result;
}

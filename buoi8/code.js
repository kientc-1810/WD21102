// // Dom truy cập vào phần tử HTML theo tên thẻ

// let a = document.getElementsByTagName('p');
// // getElementsByTagName để trả ra 1 mảng đối tượng
// console.log(a);

// // sử dụng thuộc tính innerHTML để chuyển đổi tùy chỉnh nội dung dạng text
// a[3].innerHTML = "Hello";

// // thuộc tính outerText 
// console.log(a[1].outerText);

// // duyệt mảng để in ra toàn bộ dữ liệu
// for(let item of a){
//     console.log(item.outerText);
// }

// // thuộc tính style để có thể can thiệp vào css trong các thẻ
// a[1].style.color = "red";
// a[2].style.fontSize = "50px";

// bài tập ví dụ
// tạo 5 tên nym bằng thẻ h3
// dùng DOM để in ra toàn bộ tên
// Dùng DOM để thay đổi màu sắc(mỗi tên 1 màu)
// Dùng DOM để đổi tên nym thứ 3 thành tên nyc

// let arrNYM = document.getElementsByTagName('h3');
// let color = ["red","green","blue","pink","yellow"];

// for(let i= 0; i<arrNYM.length; i++){
//     console.log(arrNYM[i].outerText);
//     arrNYM[i].style.color = color[i];
// }

// arrNYM[2].innerHTML = "Hoa";


// tạo 1 nút tiến sử dụng sự kiện onclick
// trong hàm thực hiện sự kiện sẽ đổi màu qua lần lượt các tên nym
// sau khi mà đi qua tên nym thì tên cũ sẽ chuyển thành màu đen

let index = 0;
function thayMau(){
    // dùng DOM để truy vấn được tất cả các phần tử HTML
    let arrNYM = document.getElementsByTagName('h3');

    // gắn để bắt đầu chạy từ số 0
    if(index>=arrNYM.length){
        index = 0;
    }

    // xử lý về việc biến tất cả các phần tử còn lại thành màu đen
    for(let i =0; i<arrNYM.length; i++){
        arrNYM[i].style.color = "black";
    }

    // thay đổi màu của vị trí index
    // index sẽ tăng lên 1 sau mỗi lần bấm nút
    arrNYM[index].style.color = "red";
    index++;
}


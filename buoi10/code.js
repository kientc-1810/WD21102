function myNut(){
    let thongBao = document.getElementsByClassName('thongBao');
    let email = document.getElementById('mail');

    // khai báo hàm regex kiểm tra email
    let regexEmail = /^\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}\b$/i;

    // kiểm tra xem là giá trị nhập vào có đúng là email hay không
    let checkEmail = regexEmail.test(email.value);

    //nếu là email thì sẽ trả về true còn không thì là false
    console.log(checkEmail);

    // check trống
    if(email.value == "" || email.value == null){
        thongBao[0].innerHTML = "Bạn chưa nhập email";
        return; // dùng return để dừng công việc nếu giá trị sai
    }else if(!checkEmail){
        thongBao[0].innerHTML = "Bạn cần nhập đúng định dạng email";
    }else{
        thongBao[0].innerHTML = "";
    }
}
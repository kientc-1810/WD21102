function onClick(){
    alert('Bạn đã thực hiện click chuột')
}

function onChange(selectElement){
    let mau = selectElement.value;
    if(mau){
        alert("Màu bạn chọn là: " + mau)
    }
}


function submitForm(e){
    e.preventDefault();
    let email = document.getElementById("emailInput").value;
    alert("Gửi thành công email: "+email);
}
var arrSV = [];
function save() {
  let fullname = document.getElementById("fullname").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;

  let gender = "";
  if (document.getElementById("male").checked) {
    gender = "Nam";
  } else if (document.getElementById("female").checked) {
    gender = "Nữ";
  }

  //Khởi tạo hàm kiểm tra rỗng
  function isEmpty(string) {
    if (!string || string.lengh === 0) {
      return true;
    } else return false;
  }

  //Khai báo biến báo lỗi
  let errorMessage = document.getElementById("error-message");

  //Kiểm soát Validation
  if (isEmpty(fullname)) {
    errorMessage.innerHTML = "Chưa nhập họ và tên";
  } else if (isEmpty(phone)) {
    errorMessage.innerHTML = "Chưa nhập số điện thoại";
  } else if (isEmpty(address)) {
    errorMessage.innerHTML = "Chưa nhập địa chỉ";
  } else if (isEmpty(gender)) {
    errorMessage.innerHTML = "Chưa nhập giới tính";
  } else {
    errorMessage.innerHTML = "";
  }

  if (fullname && phone && address && gender) {
    //Khai báo giá trị của bảng và dòng
    var dataRow = document.getElementById("dataList");
    var tr = document.createElement("tr");

    //Làm rỗng giá trị trong bảng trước khi thêm mới
    tr.innerHTML = "";

    // lưu dữ liệu vào trong ds sinh viên
    let student = {
      fullname: fullname,
      phone: phone,
      address: address,
      gender: gender,
    };
    arrSV.push(student);

    // In ra dữ liệu sinh viến
    arrSV.forEach((item, index) => {
      // Gán dữ liệu vào thẻ tr
      tr.innerHTML = `<td>${++index}</td><td>${item.fullname}</td><td>${
        item.phone
      }</td><td>${item.address}</td><td>${gender}</td>`;
      //In thẻ tr ra bảng
      dataRow.appendChild(tr);
    });
  }
}

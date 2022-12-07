function themSanPham(button) { // Thêm sản phẩm vào giỏ hàng
    var row = button.parentElement.parentElement.cloneNode(true); //Lấy tên sản phẩm và giá
    var deleteBtn = row.getElementsByTagName("button")[0]; // Tạo nút xoá sau khi sản phẩm đã đc thêm vào giỏ hàng
    deleteBtn.innerText = "Remove item"; // Thay từ "thêm" -> "xoá"
    deleteBtn.style.color = "red";
    deleteBtn.setAttribute('onclick','xoaSanPham(this)'); // gọi hàm xoaSanPham
    document.getElementById("cart").appendChild(row); // Thêm tên và giá sản phẩm vào "cart"
    tinhTien(); // tính tiền
}
function xoaSanPham(button) { // Xoá sản phẩm ra khỏi giỏ hàng
    var row = button.parentElement.parentElement;
    document.getElementById("cart").removeChild(row); // Xoá tên và giá sản phẩm ra khỏi "cart"
    tinhTien(); // tính tiền
}
function tinhTien() { // Tính tiền
    var cart = document.getElementById("cart");
    var rows = cart.getElementsByTagName("tr"); // Tạo ra mảng gồm tên và giá sản phẩm có trong giỏ hàng theo tag <tr>
    var tong = 0; // tổng tiền
    for (let i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        /**
         * Lấy giá trị của <td> thứ 2 theo thứ tự [0, 1,...]
         * là giá sản phẩm bao gồm phần kí tự "$" và số nhưng chỉ lấy phần số
         * bằng phương thức substring
         */
        var price = cells[2].innerText.substring(1);
        tong += Number(price);
    }
    document.getElementById("tong").innerText = tong;
}



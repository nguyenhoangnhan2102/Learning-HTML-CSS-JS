
function confirmForm() {
    var tk = document.getElementById("tk").value;
    var mk = document.getElementById("mk").value;

    if (tk != "" && mk != "") {
        if (tk == "nguyenhoangnhan" && mk == "nguyenhoangnhan") {
            window.location = "./CV/index.html";
            return false;
        }
        else {
            alert("Đăng nhập thất bại!!!");
            return false;
        }
    } else {
        alert("Tài khoản hoặc mật khẩu bị trống")
        return false;
    }


}


// if (tk != "") {
//     if (tk.length < 6) {
//         alert("Vui lòng nhập ký tự lớn hơn 6");
//         tk.focus();
//         return false;
//     }
// }
// else {
//     alert("Tài khoản không được rỗng");
//     return false;
// }
// if (mk != "") {
//     if (mk.length < 6) {
//         alert("Vui lòng nhập ký tự lớn hơn 6");
//         mk.focus();
//         return false;
//     }
// }
// else {
//     alert("Mật khẩu không được rỗng");
//     return false;
// }

function hienmk() {
    mk.type = (mk.type === "password") ? "text" : "password";
}


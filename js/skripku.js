function login() {
    let frm = window.document.getElementById("formulir");
    let username = frm.username.value;
    let pasword = frm.pasword.value;
    
    if (username == "mimin" && pasword == "mimin123") {
                 alert("Selamat Datang Mimin, Anda Administrator");
    }
    else if (username == "budi" && pasword == "budi123") {
                 alert("Selamat Datang Budi, Anda Operator");
    }
    else {
        alert("Maaf Anda Gagal Login")
    }   
        }
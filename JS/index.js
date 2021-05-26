const sanphams = [
    {
        tenSanPham: "Bấm mi",
        hinhAnh: "../IMG/Sản Phẩm/bamMi1.jpg",
        gia:"89,000 ₫"
        },
    {
        tenSanPham: "Nhip Gap Mun",
        hinhAnh: "../IMG/Sản Phẩm/nhipGapMun1.jpg",
        gia:"321,000 ₫"
    },
    {
        tenSanPham: "Bông tẩy trang",
        hinhAnh: "../IMG/Sản Phẩm/bongTayTrang1.png",
        gia:"71,000 ₫"
    },
    {
        tenSanPham: "Bông tẩm bọt biển",
        hinhAnh: "../IMG/Sản Phẩm/bongTamBotBien1.jpg",
        gia:"47,000 ₫"
    },
    {
        tenSanPham: "klairs",
        hinhAnh: "../IMG/Sản Phẩm/klairs_1.jpg",
        gia:"289,000 ₫"
    },
    {
        tenSanPham: "BRIGHTEN",
        hinhAnh: "../IMG/Sản Phẩm/BRIGHTEN1.jpg",
        gia:"308,000 ₫"
    },
    {
        tenSanPham: "Nước hoa hồng SomeByMi",
        hinhAnh: "../IMG/Sản Phẩm/nuocHoaHongSomeByMi2.jpg",
        gia:"194,000 ₫"
    },
    {
        tenSanPham: "Naruko",
        hinhAnh: "../IMG/Sản Phẩm/MatNaNaruko1.jpg",
        gia:"178,000 ₫"
    },
    {
        tenSanPham: "Bioderma",
        hinhAnh: "../IMG/Sản Phẩm/Bioderma1.png",
        gia:"405,000 ₫"
   },
   {
    tenSanPham: "Sữa tắm OLay",
    hinhAnh: "../IMG/Sản Phẩm/suaTamOlay1.jpg",
    gia:"321,000 ₫"
    },
    {
        tenSanPham: "Xịt khử mùi hương thảo",
        hinhAnh: "../IMG/Sản Phẩm/xitKhuMuiHuongThao1.jpg",
        gia:"57,000 ₫"
        },
    {
            tenSanPham: "Xà phòng tắm",
            hinhAnh: "../IMG/Sản Phẩm/xaPhongTam1.jpg",
            gia:"47,000 ₫"
     },
    
     {
        tenSanPham: "Gel Tắm Em Bé",
        hinhAnh: "../IMG/Sản Phẩm/GelTamEmBe1.jpg",
        gia:"47,000 ₫"
 },
 {
    tenSanPham: "Kem Dưỡng Trắng Body",
    hinhAnh: "../IMG/Sản Phẩm/kemDuongTrangBody1.jpg",
    gia:"47,000 ₫"
},
   
];
// **********************************************************





















function openModalLogin(){
    const formLogin = document.getElementById("form-login"); //DOM
    formLogin.classList.add("showModalLogin");
    formLogin.classList.remove("hiddenModalLogin");
}
function closeModalLogin(){
    const formLogin = document.getElementById("form-login");
    formLogin.classList.remove("showModalLogin");
    formLogin.classList.add("hiddenModalLogin");
}
let status = true ;
function changeStateModal(){
    status = !status;
    console.log("status", status);
    const contentModalLogin = document.getElementById("content-login");
    const contentModalSignUp = document.getElementById("content-signup");
    const btnChangeStateModal = document.getElementById("btnChangeStateModal");
    btnChangeStateModal
    contentModalLogin.classList.toggle("closeContentLogin");
    contentModalSignUp.classList.toggle("openContentSignIn");

    contentModalSignUp.classList.toggle("closeContentSignUp");
    contentModalLogin.classList.toggle("openContentLogin");
    if(!status){
        btnChangeStateModal.innerHTML = "Neeed an account? Join  BVT shop";
    }
    else{
        btnChangeStateModal.innerHTML = "Already have an account? Login here";
    }
}
const formTimKiem = document.getElementById("formTimKiem");
const itemSearchContainer = document.getElementById("searchContainer");

let stateSearch = true;
function searchPro(value){
    console.log(value)
    // console.log('data :>> ', data);

    if(value === "" && stateSearch){
        stateSearch = false;
    }
    else if(value && !stateSearch){
        stateSearch = true;
    }
    if(stateSearch){
        formTimKiem.classList.add("openFormSearch");
    }
    else{
        formTimKiem.classList.remove("openFormSearch");   
    }
    const spList = sanphams.filter(item => item.tenSanPham.toLocaleLowerCase().search(value.toLocaleLowerCase()) >= 0 ? item : undefined);
    console.log('spList :>> ', spList);
    const arrrayItemTag = spList.map(item => {
        return (`<div class="col-3 item-search">
        <img src="${item.hinhAnh}" alt="">
        <span>${item.tenSanPham}</span>
        </div>`);
    })
    console.log('arrrayItemTag :>> ', arrrayItemTag);
    itemSearchContainer.innerHTML = arrrayItemTag.join(" ");
}
let itemGiohang = 0;
function themSanPham(){
    const numberItem = document.getElementById("numberItemId");
    itemGiohang++;
    numberItem.innerHTML = itemGiohang;
}
function kiemTraEmailSDT(){
    let value = document.getElementById("email").value;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regexDienthoai = /^\d{9,10}$/;
    if(value.trim()===''){
        document.getElementById("tbEmailSdt").innerHTML = "Email/SĐT thì bắc buộc nhập";
        return false;
    }

    if(!regexEmail.test(value)||!regexDienthoai.test(value)){ // nếu có 1 thằng thỏa mãn thì là đúng chứ sau sai
        document.getElementById("tbEmailSdt").innerHTML = "*";
        return true;
    }
    else{
        document.getElementById("tbEmailSdt").innerHTML = "Email/SĐT không đúng định dạng";
        return false;
    }
}
function kiemTraHoTen(){
    let hoTen = document.getElementById("txtName").value;
    console.log('hoTen :>> ', hoTen);
    let regexHoten = /^[A-Z][a-zA-Z]*$/;
    
    if(hoTen.trim()===''){
        document.getElementById("tbHoTen").innerHTML = "Họ tên thì bắc buộc nhập";
        return false;
    }
    console.log('regexHoten.test(hoTen) :>> ', regexHoten.test(hoTen));
    if(!regexHoten.test(hoTen)){
        document.getElementById("tbHoTen").innerHTML = "Họ tên không đúng định dạng";
        return false;
    }

    document.getElementById("tbHoTen").innerHTML = "*";
    return true;
}
function kiemTraPassword(){
    let password = document.getElementById("password").value;
    let regexPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
    
    if(password.trim()===''){
        document.getElementById("tbMatKhau").innerHTML = "Mật khẩu thì bắc buộc nhập";
        return false;
    }

    if(!regexPassword.test(password)){ 
        document.getElementById("tbMatKhau").innerHTML = "Mật khẩu không đúng định dạng";
        return false;
    }

    document.getElementById("tbMatKhau").innerHTML = "*";
    return true;
}
var array_acc=[];
function dangky(){
    // console.log('kiemTraEmailSDT() :>> ', kiemTraEmailSDT());
    // console.log('kiemTraPassword() :>> ', kiemTraPassword());
    // console.log('kiemTraHoTen() :>> ', kiemTraHoTen());
    if(!kiemTraEmailSDT() || !kiemTraPassword() || !kiemTraHoTen()){
        alert("Đăng ký không thành công!");
        return false;
    }
    else{
        alert("Đăng ký thành công!");
        let email_sdt=document.getElementById("email").value;
        let hoTen = document.getElementById("txtName").value;
        let password = document.getElementById("password").value;
        var account = {email_sdt:email_sdt, hoTen:hoTen, password:password};
        array_acc.push(account);
        console.log(array_acc);

    }
                
}

function dangNhap(){
    let emailSignIn=document.getElementById("emailSignIn").value;
    let passwordSignIn=document.getElementById("passwordSignIn").value;
   let user = array_acc.find(item => item.email_sdt === emailSignIn);
   console.log('user :>> ', user);
   if(!user || user.password !== passwordSignIn){
       alert("Tài khoảng hoặc mật khẩu không đúng");
   }
   alert("Đăng nhập thành công");
//    sau đó em đi đóng modal đăng nhập đi em ở khúc này lun
//  test 
}



    
    
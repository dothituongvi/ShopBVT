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
let status = false ;
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

let stateSearch = true;
function searchPro(value){
    console.log(value)
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
}
let itemGiohang = 0;
function themSanPham(){
    const numberItem = document.getElementById("numberItemId");
    itemGiohang++;
    numberItem.innerHTML = itemGiohang;
}
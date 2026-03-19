const VALID_SERIAL = "5003415";
const VALID_PASSWORD = "B123424288";

(function(){
  const path = location.pathname.split("/").pop() || "index.html";

  if(path === "result.html"){
    const ok = sessionStorage.getItem("tus_login_ok");
    if(ok !== "1"){
      location.href = "index.html";
      return;
    }
  }

  const loginBtn = document.getElementById("loginBtn");
  if(loginBtn){
    loginBtn.addEventListener("click", function(){
      const serial = document.getElementById("serial").value.trim();
      const password = document.getElementById("password").value.trim();

      if(serial === VALID_SERIAL && password === VALID_PASSWORD){
        sessionStorage.setItem("tus_login_ok", "1");
        location.href = "result.html";
      }else{
        alert("報名序號或密碼錯誤");
      }
    });
  }
})();

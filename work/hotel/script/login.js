


//   login menu hiding script
  

  
    let loginBtn = document.querySelector('.login-menu-btn');
    let loginMenu = document.querySelector('.login-menu');
    let toLogin = document.querySelector('#sub-login-btn');

    const add = () => {
      loginMenu.classList.add('blocked');
    }
    const remove = () => {
      loginMenu.classList.remove('blocked');
    }

    loginBtn.addEventListener('mouseover', add);
    loginBtn.addEventListener('mouseout', remove);
  


//   login script
  
    let uID = document.querySelector("#userid");
    let idBtn = document.querySelector("#btn");
    let text = document.querySelector(".text-box");
    let uPW = document.querySelector("#passwd");
    const login = () => {
      if (uID.value == "spaker38" && uPW.value == "123") {
        location.href = "../html/main.html";
        isLogin= true;
      } else {
        text.innerHTML = "<strong>아이디 또는 비밀번호를 확인하세요</strong>";
        uID.value = "";
        uPW.value = "";
        uID.focus();
      }
    };

    idBtn.addEventListener("click", login);
  
    

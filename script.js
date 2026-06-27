let pick = document.getElementById("picker");

let cod = document.getElementById("code");

pick.addEventListener("input", function() {
    document.body.style.background = pick.value;
    cod.innerHTML = pick.value.toUpperCase();
   }
);

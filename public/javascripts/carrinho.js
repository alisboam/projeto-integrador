document.querySelector(".minus-btn").setAttribute("disabled","disabled");

document.querySelector(".plus-btn").addEventListener("click", function(){
    
    let contador = document.getElementById("quantity").value;

    contador++;

    document.getElementById("quantity").value = contador;

    if(contador > 1){
        document.querySelector(".minus-btn").removeAttribute("disabled");
        document.querySelector(".minus-btn").classList.remove("disabled");

    }
});

document.querySelector(".minus-btn").addEventListener("click", function(){
    
    let contador = document.getElementById("quantity").value;

    contador--;

    document.getElementById("quantity").value = contador;

    if(contador == 1){
        document.querySelector(".minus-btn").setAttribute("disabled","disabled");
    }
});
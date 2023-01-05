const submit = document.querySelector(".submit");
    var output = document.querySelector(".output");
    
    submit.addEventListener('click', (e) => {
      var n1 = document.querySelector(".n1").value;
      var n2 = document.querySelector(".n2").value;
    
      var operacion = parseInt(parseInt(n1) + parseInt(n2)) / 2;
      output.innerHTML = operacion;
      
      if (n1.length > 2 || n1.length == 0 || n2.length > 2 || n2.length == 0) {
        alert("The field accepts up to at least two values, please try again!");
        output.innerHTML = "0.00";
      }
    });

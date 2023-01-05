var dom = document.querySelector("#DOM");
    
    // CREATING TAGs
    var fieldset = document.createElement("fieldset");
    var form = document.createElement("form");
    var divName = document.createElement("div");
    var labelName = document.createElement("label");
    var inputName = document.createElement("input");
    var divOld =  document.createElement("div");
    var labelOld = document.createElement("label");
    var inputOld = document.createElement("input");
    var text = document.createElement("p");
    var buttonSubmit = document.createElement("button");
    var greet = document.createElement("p");
    
    // STYLE ELEMENTS
    fieldset.style = "width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.8); padding: 10px; font-family: Verdana, Geneva, Tahoma, sans-serif; font-weight: 300";
    form.style = "border-radius: 5px; background: rgba(230, 2330, 230, 0.8); position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 10px; height: 300px; display: flex; flex-direction: column; align-items: center; justify-content: space-evenly";
    divName.style = "display: flex; align-items: flex-start; justify-content: center; flex-direction: column; font-size: 0.9em";
    labelName.innerText = "Write your name here";
    inputName.style = "border: 2px solid black; width: 300px; padding: 5px; font-size: 1em; border-radius: 10px; box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5)";
    divOld.style = "display: flex; align-items: flex-start; justify-content: center; flex-direction: column; font-size: 0.9em";
    labelOld.innerText = "Write your old here";
    inputOld.style = "border: 2px solid black; width: 300px; padding: 5px; font-size: 1em; border-radius: 10px; box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5)";
    text.style = "width: 280px; color: #000; text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.9); text-align: center; font-size: 0.9em; font-weight: 400";
    text.innerText = "•••"
    buttonSubmit.style = "width: 300px; padding: 15px; font-size: 1em; border-radius: 10px; box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5); font-weight: 500";
    buttonSubmit.innerText = "Go";
    greet.style = "color: limegreen; font-size: 0.8em; position: absolute; left: 10px; bottom: 10px";
    greet.innerText = "😁 Welcome! 👋";
    
    // POSITION ELEMENTS
    dom.append(fieldset);
    fieldset.append(form);
    form.append(divName);
    divName.append(inputName);
    divName.prepend(labelName);
    form.append(divOld);
    divOld.append(inputOld);
    divOld.prepend(labelOld);
    divOld.after(buttonSubmit);
    buttonSubmit.before(text);
    buttonSubmit.after(greet);
    
    // VALIDATION
    buttonSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      
      if(inputName.value === "" || inputOld.value === "") {
        buttonSubmit.innerText = "There are a field empty!";
        
        setTimeout(() => {
		      buttonSubmit.innerText = "Go";
		    }, 3000);
		    
		    return;
      } else {
        console.log("OPERATION SUCCESSFULLY DONE!");
        text.innerText = "Hello " + inputName.value + ", you are " + inputOld.value + " years old. Welcome to my project!";
      }
    });

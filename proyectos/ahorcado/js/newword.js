document.addEventListener('keyup', function(e) {
    if (e.key === "Enter" || e.keyCode === 13) {
        addWord();
    }
});

// Get the string into the textarea and it's saved into a localStorage for persistence.
function addWord(){
    var text = document.getElementById("textareaId").value.toUpperCase();
    
    if (text.length > 8) {
        invalid();
        return false;
    }
    console.log(text);
   
    // Solve a bug when the user press an enter key.
    if (text.slice(-1) == " " || text.slice(-1) == "\n") {
        text = text.slice(0, -1);
        console.log("after" +text);
    }

    // localStorage.setItem('added', text);
    sessionStorage.setItem('added', text);
    window.location.replace("index.html");
}

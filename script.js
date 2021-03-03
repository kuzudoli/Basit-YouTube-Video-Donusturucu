var converBtn = document.querySelector(".convert-button");
var URLinput = document.querySelector(".URL-input");

converBtn.addEventListener("click", function(){
    console.log(`URL : ${URLinput.value}`);
    sendURL(URLinput.value);
})

function sendURL(URL){
    window.location.href=`http://localhost:4000/download?URL=${URL}`;
}
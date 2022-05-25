import { setImage } from "./index.tsx";
var reader  = new FileReader();

function confirm(){
    var file = document.getElementById('image-input').files[0];
    console.log(file);
    // it's onload event and you forgot (parameters)
    reader.onload = function(e)  {
        setImage(e.target.result);
     }
     // you have to declare the file loading
     reader.readAsDataURL(file);
}

export default confirm
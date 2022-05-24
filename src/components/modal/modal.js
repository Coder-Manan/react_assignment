// document.getElementsByClassName("close")[0].onclick = function(){
//     document.getElementById("Modal").style.display = "none";
// }

// function open() {
//     document.getElementById("Modal").style.display = "block";
// }

// window.onclick = function(event) {
//     if (event.target == document.getElementById("Modal")) {
//         document.getElementById("Modal").style.display = "none";
//     }
// }

let imageSet = false;
var reader  = new FileReader();

function showModal(){
    document.getElementById("Modal").style.display="block";
}

function confirm(){
    var file = document.getElementById('image').files[0];
    // it's onload event and you forgot (parameters)
    reader.onload = function(e)  {
        var image = document.createElement("img");
        // the result image data
        image.src = e.target.result;
        if (imageSet == true){
            document.getElementById("modal-content").removeChild(document.getElementById("modal-content").lastElementChild);    
        }
        else{
            imageSet = true;
        }
        document.getElementById("modal-content").appendChild(image);
     }
     // you have to declare the file loading
     //reader.readAsDataURL(file);
}

function chooseFile(){
    window.showOpenFilePicker({
        types: [
              {
                description: 'Image Files',
                accept: {
                  'image/*': ['.jpg','.jpeg','.png'],//Extensions you want to allow
                },
              },
            ],
            excludeAcceptAllOption: true, // this hides all files option
            multiple: false,
    })
    .then((res) => {
        const file = res[0]; 
        console.log(file);
        const fileData = file.getFile().then(()=>{console.log(fileData)})
        console.log(fileData);
        var reader  = new FileReader();
        reader.onload = function(e)  {
            var image = document.createElement("img");
            image.src = e.target.result;
            document.getElementById("modal-content").appendChild(image);
        }
        if (file instanceof Blob){
            reader.readAsDataURL(file);
        }
        else{
            reader.readAsDataURL(new Blob(file));
        }
    })
    .catch((error)=>{alert("error"); console.log(error)});
}
// Get the modal
// var modal = document.getElementById("Modal");

// Get the button that opens the modal
//var btn = document.getElementById("Btn");

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
//btn.onclick = function() {
//modal.style.display = "block";
//}

// When the user clicks on <span> (x), close the modal
function closeModal() {
document.getElementById("Modal").style.display = "none";
}

export {closeModal, confirm, showModal}
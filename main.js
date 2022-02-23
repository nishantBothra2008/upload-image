const imageDisplay = document.querySelector(".image-display"),
instructions = imageDisplay.querySelector("header"),
browseDefaultBtn = imageDisplay.querySelector("input"),
browseBtn = imageDisplay.querySelector("button");
let file;

browseBtn.onclick = () => {
    browseDefaultBtn.click();
}

browseDefaultBtn.addEventListener("change", () => {
    file = this.files[0];
    showFile();
});

imageDisplay.addEventListener("dragover", (event) => {
    event.preventDefault();
    imageDisplay.classList.add("active");
    instructions.innerHTML = "Release to Upload";
});

imageDisplay.addEventListener("dragleave", () => {
    imageDisplay.classList.remove("active");
    instructions.innerHTML = "Drag & Drop";
});

imageDisplay.addEventListener("drop", (event) => {
    event.preventDefault();
    file = event.dataTransfer.files[0];
    showFile();
});

function showFile() {
    let fileType = file.type;
    let validFileExtensions = ["image/png", "image/jpg", "image/jpeg"];
    if (validFileExtensions.includes(fileType)) {
        let fileReader = new FileReader();
        fileReader.onload = () => {
            let fileURL = fileReader.result;
            let imgTag = '<img src="${fileURL}" alt="">';
            imageDisplay.innerHTML = imgTag;
            document.getElementById("alert").innerHTML = "Selected.";
        }
        fileReader.readAsDataURL(file);
    }
    else {
        document.getElementById("alert").innerHTML = "This is not an image file. Choose an image.";
        imageDisplay.classList.remove("active");
    }
}





















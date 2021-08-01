document.addEventListener("DOMContentLoaded", function () {
    const submitForm = document.getElementById("inputBook");
    const inputBookIsComplete = document.getElementById("inputBookIsComplete");
    
    submitForm.addEventListener("submit", function (event) {
        event.preventDefault();
        addBook();
    });

    inputBookIsComplete.addEventListener("input", function (event) {
        event.preventDefault();
        checkButton();
    });

    if(isStorageExist()) {
        loadDataFromStorage();
    }
});

document.addEventListener("ondatasaved", ()=> {
    console.log("data berhasil disimpan.")
});

document.addEventListener("ondataloaded", ()=> {
    refreshDataFromBooks();
})

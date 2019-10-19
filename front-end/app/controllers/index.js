let formElement = document.querySelector("#form");
formElement.addEventListener('submit', (e) =>{
    e.preventDefault();
    const formData = new FormData(formElement);
    
    fetch('http://localhost:3333/car/average', {
        method: 'post',
        body: formData,
    })
});

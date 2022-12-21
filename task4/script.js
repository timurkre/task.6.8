const currentUrl = document.querySelector('#currentUrl');
currentUrl.onclick = function(event){
    const newUrl = prompt ('Введите новое название ссылки');
    currentUrl.textContent = newUrl;
    event.preventDefault()
}
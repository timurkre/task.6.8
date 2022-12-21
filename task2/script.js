const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click',() => {
    alert('Служит для вывода информации в консоль')
})

const alertAlert = document.querySelector('#alert');

alertAlert.addEventListener('click',() => {
    alert('Служит для отображения информации пользователям через диалоговое окно!')
})

const promptPrompt = document.querySelector('#prompt');

promptPrompt.addEventListener('click',() => {
    prompt('Отображает диалоговое окно с запросом на ввод текста. Попробуйте что-то ввести!')
})
//Program that convert dollar to dirham

let dollar = document.getElementById('dollar')

let dirham = document.getElementById('dirham')

dollar.onkeyup = () => {
    dirham.value = dollar.value * 10
}

dirham.onkeyup = () => {
    dollar.value = dirham.value / 10
}
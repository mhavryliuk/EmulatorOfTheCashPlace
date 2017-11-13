window.onload = function () {

    /*Запрет ввода букв для поля Цена*/
    document.getElementById('price').onkeypress = function BanSymbols(e) {
        return !(/[А-Яа-яA-Za-z-+*/,.]/.test(String.fromCharCode(e.charCode)));
    };

    /*Запрет ввода букв для поля Количество*/
    document.getElementById('quantity').onkeypress = function BanSymbols(e) {
        return !(/[А-Яа-яA-Za-z-+*/,.]/.test(String.fromCharCode(e.charCode)));
    };

    /*Функция подсчета суммы за один вид товара*/
    setInterval(function CalcSum() {
        document.getElementById('result').innerHTML = (parseFloat(document.getElementById('price').value) || 0) * (parseFloat(document.getElementById('quantity').value) || 0);
    }, 500);

}




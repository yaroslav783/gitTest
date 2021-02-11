function fun(x) {
    if(x < 0){ 
        return 0;
    }else if(x < 2){
        return x**2;
    }else if(x < 5){
        return 6 - x;
    }else{
        return 1;
    }
}

window.document.write("<h3>Кусочно-гладкая функция</h3>");

window.document.write('<img src="function.jpg" width="500" height="300"<br /><br />');

let z;
z = 9*Math.random()-2;
window.document.write("Случайный аргумент: <b>" + z + "</b><br>");
window.document.write("Значение функции: <b>" + fun(z) + "</b><br>");

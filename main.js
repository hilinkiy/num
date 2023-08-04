let a = +prompt('Введите первое число');
let b = +prompt('Введите второе число');
let c = +prompt('Введите третье число');

if ((b < a && a < c) || (c < a && a < b)) alert(a);
if ((a < b && b < c) || (c < b && b < a)) alert(b);
if ((a < c && c < b) || (b < c && c < a)) alert(c);
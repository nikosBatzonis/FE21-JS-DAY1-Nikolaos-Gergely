'use strict';

let fruits = 'mango/cherries/kiwi/grapes/pear/peach/orange/lemon';
let finish = new Array();
finish = fruits.split('/').join("<br><br>");
document.write(finish);

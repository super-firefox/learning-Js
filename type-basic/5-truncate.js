"use strict"

function truncate(str, maxLength) {
    if (str.length > maxLength) {
        let truncateStr = str.slice(0, maxLength - 1);
        return truncateStr + "..."

    }
    return str;

}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));
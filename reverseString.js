// function reverseString(str) {
//     var reversed = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//       reversed += str[i];
//     }
//     return reversed;
//   }

const reversedString = (string) => {
    return string.split("").reverse().join("")
}


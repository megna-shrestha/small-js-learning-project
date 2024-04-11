const input =document.getElementById("input")

function reverseString(str){
    // find the length of a string
    const len = str.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (str[i] !== str[len - 1 - i]) {
           return false;
        }
    }
   return true;
}


function check(){
    const value=input.value
    const ispalindrome = reverseString(value);
    if (ispalindrome) {
        alert("oh yeah!!!!! palindrome");
    } else {
        alert("sorry, word's not palindrome");
    }

}
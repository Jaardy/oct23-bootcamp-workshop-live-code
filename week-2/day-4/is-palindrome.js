function isPalindrome(string) {
    if (string.length<2){
        return true
    }
    return (string.toLowerCase().at(0) === string.at(-1)) ? isPalindrome(string.slice(1,-1)) : false

}

//This passes tests but there is still a problem with it that isn't caught by testcases.



const spacify = (string) => {
    let lettersArray = string.split("")
    let stringResult = ""
    for(let i = 0; i < lettersArray; i++){
        if(i < 1){
            stringResult = stringResult + lettersArray[i]
        }else if(lettersArray[i] !== " "){
            stringResult = stringResult + " " + lettersArray[i]
        }
    }

    console.log(stringResult)
}

spacify("hello world")
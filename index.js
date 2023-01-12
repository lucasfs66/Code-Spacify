const spacify = (string) => {
    let lettersArray = string.split("")
    let stringResult = ""
    for(let i = 0; i < lettersArray.length; i++){
        if(i < 1){
            stringResult = `${lettersArray[i]}`
        }else if(lettersArray[i] !== " "){
            stringResult = `${stringResult} ${lettersArray[i]}`
        }
        
    }

    console.log(stringResult)
}

spacify("hello world")
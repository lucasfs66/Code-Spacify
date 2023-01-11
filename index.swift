//Modify the spacify function so that it returns the given string with spaces inserted between each character.


func spacify(_ str: String) -> String {
    var arrayOfString = str.split(separator: "")
    var resultString = ""
    
    for letter in arrayOfString{
        if arrayOfString.firstIndex(of: letter) == 0{
            resultString = "\(letter)"
        } else if letter != " "{
            resultString = "\(resultString) \(letter)"
        }
    }
    
    return resultString
}


spacify("hello world") // "h e l l o   w o r l d"
input.addEventListener('input', (e =>{
    checkingString = input.value
    mistakes = []
    let i = ''
    text.innerText = textCopy
    for (var j = 0; j < text.innerText.length; j++){
        let as = text.innerText[j]
        if(j == checkingString.length - 1 && as != ' '){
            as = '_'
        }
        i = i + as
        // console.log(as);
    }
    // i[checkingString.length] = '_'
    text.innerText = i
    // console.log(i);
    for(let i = 0; i < checkingString.length; i++){
        if(checkingString[i] != textCopy[i]){
            if(checkingString[i] == ' '){
                mistakes.push('_')
            }
            else{
                mistakes.push(checkingString[i])
            }
        }
    }
    if(checkingString.length % 180 == 0 && !k && checkingString != 0){
        x -= 1.8
        text.style.top = `${x}rem`
        k = true
    }
    else if(checkingString.length % 62 == 0 && k && checkingString != 0){
        x -= 1.8
        text.style.top = `${x}rem`
    }
    mistaker.innerText = mistakes.join(' ')
    // console.log(mistakes,checkingString.length);
}))
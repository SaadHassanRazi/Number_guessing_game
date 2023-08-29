const number = Math.floor(Math.random()*15)


const guessButton = ()=>{
 
    document.getElementById('numberOfGuess').innerHTML++ 
    let fieldValue = document.getElementById('field').value
    document.getElementById('guessedNumbers').innerHTML += fieldValue + ','
    if(fieldValue== number){
        document.getElementById('statement').innerHTML = `You guessed the right number ${number}`
    }else if(fieldValue > number){
        document.getElementById('statement').innerHTML = 'Your guess is too high'
    }else if(fieldValue < number){
        document.getElementById('statement').innerHTML = 'Your guess is too low'
    }
}
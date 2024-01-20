function getColor() {
    const randomNumber = Math.floor(Math.random()*16777215)
    const randomCode = `#${randomNumber.toString(16)}`;
    
    document.querySelector("#color-code").innerText = randomCode

    //! 2 ways of writing the code 
    // document.querySelector("body").style.backgroundColor = randomCode
    document.body.style.backgroundColor = randomCode

    navigator.clipboard.writeText(randomCode) //! This code direcly copy the randomCode to clipboard when we click on Click Me.
}

document.getElementById("btn").addEventListener("click",getColor)

// Initial Call
getColor()
/* variable to store the count
to log, variables must be inizialized first

cmd*k*c to comment multiple lines at once

/*Javascript name convention: camelCase*/
/* DOM (Document Object Model) : how you use Javascript to modify a website.
    You interact with html document
    'document' is a datatype object
    Model is representation of an html in javascript*/

    /*store the following in a variable*/
let countEL = document.getElementById('count-el')
let saveEL = document.getElementById('save-el')
let totalEl = document.getElementById('total-el')
let count = 0
let total = 0

/*the following function will be executed anytime the relative button is clicked*/
function increment(){
    count += 1
    countEL.textContent = count
}

function save(){
    let countStr = count + " - "
    saveEL.textContent += countStr
    total += count
    totalEl.textContent = "Total entires: " + total
    count = 0
    countEL.textContent = 0
}

function reset(){
    count = 0
    countEL.textContent = 0

    saveEL.textContent = "Previous entires: "

    total = 0
    totalEl.textContent = "Total entires:"
}
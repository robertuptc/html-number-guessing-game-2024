let randomNum = Math.floor(Math.random() * (5 - 1 + 1)) + 1;


document.addEventListener('submit', (e) => {
    e.preventDefault()
    let input = Number(document.getElementById("input-number").value)
    checkingNum(input)
})


function checkingNum(inputNum) {
    let para = document.querySelector("p")

    if (inputNum == randomNum) {
        alert(`Your number ${inputNum} is CORRECT!`);
        window.location.reload();
    } else if (inputNum < randomNum) {
        para.innerHTML = `Your number ${inputNum} is too LOW!`;
        creatingNewLi(inputNum);
    } else {
        para.innerHTML = `Your number ${inputNum} is too HIGH!`;
        creatingNewLi(inputNum);
    }
}


function creatingNewLi(data) {
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(`${data} -`))

    let ul = document.getElementById("guessed-numbers")
    ul.appendChild(li)

}


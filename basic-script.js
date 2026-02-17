/*  
    Name: Marcos Rivera
    Class: CIS 4004
    Date: 2/16/2026
    Assignment: Basic JavaScript
*/

// Helpers.
function getCounter()
{
    const counterSpan = document.getElementById("counter");
    return parseInt(counterSpan.textContent, 10) || 0;
}

function setCounter(value)
{
    document.getElementById("counter").textContent = value;
}

// Simple Functions Question.
function tickUp()
{
    const current = getCounter();
    setCounter(current + 1);
}

function tickDown()
{
    const current = getCounter();
    setCounter(current - 1);
}

// Simple For Loop Question.
function runForLoop()
{
    const n = getCounter();
    let output = "";

    for (let i = 0; i <= n; i++)
    {
        output += i + (i === n ? "" : " ");
    }

    document.getElementById("forLoopResult").textContent = output;
}

// Repetition with Condition Question.
function showOddNumbers()
{
    const n = getCounter();
    let output = "";

    for (let i = 1; i <= n; i += 2)
    {
        output += i + (i + 2 > n ? "" : " ");
    }

    document.getElementById("oddNumberResult").textContent = output;
}

// Arrays Question.
function addMultiplesToArray()
{
    const n = getCounter();
    const arr = [];

    // Empty Array if n < 5.
    if (n >= 5)
    {
        // Reversing Order.
        for (let i = n; i >= 5; i--)
        {
            if (i % 5 === 0) arr.push(i);
        }
    }

    // Printing Array.
    console.log(arr);
}

// Objects and Form Fields Question.
function printCarObject()
{
    const cType = document.getElementById("carType").value;
    const cMPG = document.getElementById("carMPG").value;
    const cColor = document.getElementById("carColor").value;

    const carObj = { cType, cMPG, cColor };

    console.log(carObj);
}

// Objects and Form Fields Pt. 2 Question.
function loadCar(which)
{
    let selected;

    if (which === 1) selected = carObject1;
    else if (which === 2) selected = carObject2;
    else if (which === 3) selected = carObject3;
    else return;

    document.getElementById("carType").value = selected.cType;
    document.getElementById("carMPG").value = selected.cMPG;
    document.getElementById("carColor").value = selected.cColor;
}

// Changing Styles Question.
function changeColor(which)
{
    const p = document.getElementById("styleParagraph");

    if (which === 1) p.style.color = "red";
    else if (which === 2) p.style.color = "green";
    else if (which === 3) p.style.color = "blue";
}
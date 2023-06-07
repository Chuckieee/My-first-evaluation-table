function addition() {
    display.innerHTML = ""
    table="<table>"
    for (var a=1; a<=row.value; a++) {
        table+="<tr>"
        for (var b=1; b<=col.value; b++){
            console.log(`${a} + ${b} = ${a+b}`)
        table+=`<td>${a} + ${b} = ${a+b}</td>`
      
        }
        table+="</tr>"
    }
    table+="</table>"
    display.innerHTML += table
}
function subtraction() {
    display.innerHTML = ""
    table="<table>"
    for (var a=1; a<=row.value; a++) {
        table+="<tr>"
        for (var b=1; b<=col.value; b++){
            console.log(`${a} - ${b} = ${a-b}`)
        table+=`<td>${a} - ${b} = ${a-b}</td>`
      
        }
        table+="</tr>"
    }
    table+="</table>"
    display.innerHTML += table
}
function multiplication() {
    display.innerHTML = ""
    table="<table>"
    for (var a=1; a<=row.value; a++) {
        table+="<tr>"
        for (var b=1; b<=col.value; b++){
            console.log(`${a} * ${b} = ${a*b}`)
        table+=`<td>${a} * ${b} = ${a*b}</td>`
      
        }
        table+="</tr>"
    }
    table+="</table>"
    display.innerHTML += table
}
function division() {
    display.innerHTML = ""
    table="<table>"
    for (var a=1; a<=row.value; a++) {
        table+="<tr>"
        for (var b=1; b<=col.value; b++){
            console.log(`${a} / ${b} = ${a/b}`)
        table+=`<td>${a} / ${b} = ${a/b}</td>`
      
        }
        table+="</tr>"
    }
    table+="</table>"
    display.innerHTML += table
}
function addition() {
    display.innerHTML = ""
    table="<table>"
    for (var a=1; a<=row.value; a++) {
        table+="<tr>"
        for (var b=1; b<=col.value; b++){
            console.log(`${a} + ${b} = ${a+b}`)
        table+=`<td>${a} + ${b} = ${a+b}</td>`
      
        }
        table+="</tr>"
    }
    table+="</table>"
    display.innerHTML += table
}
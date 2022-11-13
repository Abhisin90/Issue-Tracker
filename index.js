const form = document.querySelector('form');
const div = document.querySelector('.issueKeeper')

const guidGenerator= () => {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

const presentingData = (form) => {
    const newLi = document.createElement('li')

    const issueNo = document.createElement('p')
    issueNo.innerText = guidGenerator()
    newLi.append(issueNo)

    const issueStatus = document.createElement('h3')
    const issueStat = document.createElement('span')
    issueStat.innerText = 'Open'
    issueStat.classList.add('makeblue')
    issueStatus.append(issueStat)
    newLi.append(issueStatus)
    

    const h2new = document.createElement('h2')
    h2new.innerText = form.elements.description.value
    form.elements.description.value = ""
    newLi.append(h2new)

    const h3new = document.createElement('h3')
    h3new.innerText = form.elements.severity.value 
    form.elements.severity.value = "Low"
    newLi.append(h3new)

    const h3new2 = document.createElement('h3')
    h3new2.innerText = form.elements.assigned.value
    form.elements.assigned.value = ""
    newLi.append(h3new2)
    
    const button1 = document.createElement('button')
    button1.innerText = 'Close'
    button1.classList.add('button1')
    newLi.append(button1)

    const button2 = document.createElement('button')
    button2.innerText = 'Delete'
    button2.classList.add('button2')
    newLi.append(button2)

    newLi.classList.add('design')
    div.append(newLi)
}

form.addEventListener('submit',(e) => {
    e.preventDefault()
    return presentingData(form);
})

div.addEventListener('click',(e) =>{
   if(e.target.innerText==='Delete'){
    e.target.parentNode.remove()
   }
   if(e.target.innerText==='Close'){
    const status = e.target.parentNode.firstChild.nextSibling.firstChild
    status.innerText = 'Close'
    status.classList.add('makeBlack')
   }
})


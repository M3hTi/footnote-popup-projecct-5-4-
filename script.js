import { footNotes } from "./footnotes.js";


// console.log(footNotes);


const phrases = document.querySelectorAll('dfn')
// console.log(phrases);






phrases.forEach((phrase,index) => {
    phrase.addEventListener('click', function(){
        // console.log(this);
        const phrase = document.createElement('h1')
        phrase.textContent = this.textContent;
    
        const fooNote = document.createElement('p')
        fooNote.textContent = footNotes[index]
        fooNote.style = 'font-style: italic; font-size: 1.2em;'

        const closeBtn = document.createElement('input')
        closeBtn.type = 'button'
        closeBtn.value = 'Close Footnote'
        closeBtn.style = 'display: block; margin: 10px auto; cursor: pointer'

        const popup = window.open("", "footnote", "width = 300, height = 200, top = 100, left = 100")
        popup.document.body.style = 'background-color: ivory; font-size: 16px; padding: 10px;'

        popup.document.body.appendChild(phrase)

        popup.document.body.appendChild(fooNote)

        popup.document.body.appendChild(closeBtn)


        closeBtn.addEventListener('click', function(){
            popup.close()
        })
    })
})
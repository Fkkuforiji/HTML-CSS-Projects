const tagsEl = document.getElementById('tags')
/*El is refering to event listener */
const textarea = document.getElementById('textarea')

/*creates the blinking typing cursor in the text box */
textarea.focus()

/*when an key is pressed, when the key goes back up the key input is received and processed for however it should compile. In this case the keyup instruction will also create a tag for the input that is given in the text area. For more visit: https://www.w3schools.com/jsref/event_onkeyup.asp*/

textarea.addEventListener('keyup', (e) => {
 /*e is the short var reference for an event object*/
        createTags(e.target.value)
})

function createTags(input) {
    /*The input.split passes the input and splits the inputs into separate tags using the comma (like an array)*/
    const tags = input.split(',').filter(tag => tag.trim() !=='').map(tag => tag.trim())
 /*we are filtering out white space, so that spaces after commas are not counted as an input value in the array*/
    tagsEl.innerHTML = ''
/*InnerHTML means the HTML info in between the i*/

    tags.forEach(tag => {
     const tagEl = document.createElement('span')
     tagEl.classList.add('tag')
     tagEl.innerText = tag
     tagsEl.appendChild(tagEl)
    })



}
export function test(element) {
    // maxgräns för visade meddelnanden 10 st 
    // en meddelande historik
    // lyssna på enter
    // slashkommando /h för hjälp
    // förbjud tomma meddelanden
    let history = "History: \n"
    function sendmsg() {
        let date = new Date(Date.now())
        let msg = ""
        date = date.getHours() + ":" + date.getMinutes() + " "
        msg += date
        msg += element.querySelector('#msg').value
        if (msg === date + "/h"){
            alert("Du får inge hjälp")
            element.querySelector('#msg').value = ''
            msg = date
        }
        if (msg === date +"/history"){
            alert(history)
            element.querySelector('#msg').value = ''
            msg = date
        }
        if (msg === date + "") {
            console.log("Could not send empty message")
        } else {
            history += msg
            history += "\n"
        const msglist = element.querySelector('#msglist')
        const li = document.createElement('li')
        li.textContent = msg
        msglist.appendChild(li)
        element.querySelector('#msg').value = ''
        }
        if(msglist.childElementCount > 10) {
            msglist.removeChild(msglist.firstElementChild)
        }
    }

    const send = element.querySelector('#send')
    send.addEventListener('click', (e) => {
        e.preventDefault()
        sendmsg();
    })
    msg.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault()
            sendmsg();
        }
    })
}
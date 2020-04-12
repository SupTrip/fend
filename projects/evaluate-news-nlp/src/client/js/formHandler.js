function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/api',
    {
        method: 'POST',
       
        body: JSON.stringify({formText}),
        headers: {"Content-Type": "application/json"}
    })

    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = `Input: ${reply.text} <br> Subjectivity: ${reply.subjectivity} <br> Polarity: ${reply.polarity} <br>`
    })
}

export { handleSubmit }

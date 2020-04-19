function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    console.log("Getting Element"+ formText);
    Client.validUrl(formText)
    console.log("After validation Element"+ formText);
    console.log("::: Form Submitted and JSON is :::"+ JSON.stringify({formText}))
    
    fetch('http://localhost:8081/api',
    {
        method: 'POST',
        mode:'cors',
        body: JSON.stringify({formText}),
        headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
    .then(function(res) {
        console.log("Updating the UI!");
        document.getElementById('results').innerHTML = `Input: ${res.text} <br> Subjectivity: ${res.subjectivity} <br> Polarity: ${res.polarity} <br>`
    })
}
export { handleSubmit }
const name = 'lionel'
const job = 'athlete'
const age = 15
const city = 'ikeja'

let html = `<ul>
    <li>Name: ${name}</li>
    <li>Job: ${job}</li>
    <li>Age: ${age}</li>
    <li>City: ${city}</li>
</ul>`;


document.body.innerHTML = html;
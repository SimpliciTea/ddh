// quick fix to enable only one client description to be open at a time
// (initially built to require no JS, but requirements changed)

const clients = document.querySelectorAll('div.client');


clients.forEach((client) => {
  client.addEventListener('click', handleClientClick);
})

function handleClientClick(e) {
  e.preventDefault();
  let clickedClient = e.currentTarget;
  
  clients.forEach((client) => {
    let checkbox = client.querySelector('input[type="checkbox"]');
    
    if (client === clickedClient && !checkbox.checked) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
  })



}

const baseUrl = 'https://randomuser.me/api/?results=6'
const divCards = document.querySelector('.cards')
const btnRandom = document.querySelector('#random')


  fetch(`${baseUrl}`).then(response => {
    response.json().then(data => {
      localStorage.setItem('User', JSON.stringify(data.results));
      const dadosUser = JSON.parse(localStorage.getItem('User'))
        renderizarDadosUsuario(dadosUser)
    })
  })


const dadosUser = JSON.parse(localStorage.getItem('User'))
function renderizarDadosUsuario(dataUser) {
  dataUser.forEach( (user, index) => {
    const users = `
      <div class="card" id="${index}">
        <div class="img-perfil">
          <img src=${user.picture.medium} alt="">
        </div>
        <div class="about">
            <p>${user.name.first} ${user.name.last}</p>
            <p>${user.email}</p>
        </div>
        <button class="btn-card" onclick="removerItem(${index})">
          <img src="./asset/lixeira.png" alt="">
        </button>
      </div>
      `
    return (divCards.innerHTML += users);
  })
};
 

function randomUser() {
  event.preventDefault();
  fetch(`${baseUrl}`).then(response => {
    response.json().then(data => {
      localStorage.setItem('User', JSON.stringify(data.results));
      window.location.reload()
    })
  })
}

function removerItem(data){
  event.preventDefault();
  dadosUser.splice(data,1); 
  localStorage.setItem('User', JSON.stringify(dadosUser));
  const newData = JSON.parse(localStorage.getItem('User'));
  divCards.innerHTML = ''
  renderizarDadosUsuario(newData)
}




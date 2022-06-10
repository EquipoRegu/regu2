////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Sockets */
const socket = io();

socket.on('msg', (usr) => {
    console.log(usr)
})

const saveusr = (title, usrs) => {
    socket.emit('newusr', {
        title,usrs,
    })
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Forms */
const inicio = document.querySelector('#inicio')

inicio.addEventListener('submit', (e) => {
    e.preventDefault()

    console.log(inicio['title'].value,inicio['usrs'].value);
    saveusr(inicio['title'].value,inicio['usrs'].value);
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* UI */
const usrList = document.querySelector('#Usrs')

const renderusr = Usr => {

    usrList.innerHTML = '<h1>Hola</h1>'    
    
}
renderusr()

/*
var typed= new Typed(".input", {
    strings:["Cipriano Mario.","Felix Jesús.","Gómez Alan."],
    typeSpeed: 70,
    backSpeed: 60,
    loop:true
});
*/

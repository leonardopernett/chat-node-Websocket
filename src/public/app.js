const socket = io();

const output = document.getElementById('output');
const actions = document.getElementById('actions');

const message = document.getElementById('message');
const username = document.getElementById('username');
const btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
    const newMessage = {
        username:username.value,
        message:message.value
    }
    if(!message.value.trim() || !username.value.trim()){
       return  alert('los campo no puede estar vacios')
    }
    socket.emit('message', newMessage);
    
    username.value=""
    message.value=""
})

message.addEventListener('keypress', ()=>{
    socket.emit('typing', username.value)
    
})

socket.on('typing', (data)=>{
    actions.innerHTML =`<p><em>${data} is typing new message...</em></p>`
})

socket.on('message', data=>{
    actions.innerHTML =""
    output.innerHTML += `<p><strong>${data.username}</strong> : ${data.message}</p>`
    output.scrollTop =output.scrollHeight
})
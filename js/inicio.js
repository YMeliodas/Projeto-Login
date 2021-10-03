const button = document.querySelector('button')

button.addEventListener('click', function(){
    const audio = document.querySelector('audio')
    audio.play()
})

document.getElementById('azulclaro')
    .addEventListener('click', function(){
        document.querySelector("body").setAttribute("class","azulclaro");
    })
document.getElementById('branco')
    .addEventListener('click', function(){
        document.querySelector("body").setAttribute("class","branco");
    })
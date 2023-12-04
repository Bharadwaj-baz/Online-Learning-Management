// keyboard event listener
document.addEventListener('keydown' , function(event)
{
    document.getElementById("demo").textContent="which key You have presed on keyboard = "+event.key

});


// mouse event listener

document.addEventListener('click', function(event)
{
    document.getElementById("demo").textContent="You have clicked the mouse"
});
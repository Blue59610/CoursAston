// Start

  var name = 'toto'

  alert('Hello ' + name);
  console.log('Hello ' + name);
  // document.write('Hello ' + name);

  var title = document.getElementById('title');
  title.innerHTML = 'Hello ' + name;


// Function test

function maFontion(message)
{
  console.log('Ma premiere fonction');
  console.log(message);
}

maFontion('Ceci est un message');

// Fonction anonyme

(function maFonction(arg)
 {
    console.log('Fonction anonyme');
 }
)();

var funky = function ()
{
  console.log('Variable contenant la fonction');
}

funky();

var myButton = document.getElementById('btnHello');

myButton.addEventListener('click', function(event)
{
  alert('My callBack');
});

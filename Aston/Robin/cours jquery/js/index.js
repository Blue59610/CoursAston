/*var p = document.createElement('p');
var text = document.createTextNode('Mon super texte');
p.innerHTML = "Montext";
//p.appendChild(text);

var content = document.getElementById('content');
content.appendChild(p);

var body = document.getElementsByTagName('body');
console.log(body);

body[0].appendChild(text);

var a = new Array([1]);
var b = a;
a[0] = 20;*/

$(document).ready(function()
{
  var list = $('li.active'); // odd: pair  et   even: impair

  list.css('background-color','yellow');

  $('#nav').on('click','li', function()
  {
    if($(this).css("background-color") == "rgba(0, 0, 0, 0)")
    {
      $(this).css('background-color','yellow');
    }
    else
    {
      $(this).css('background-color','rgba(0, 0, 0, 0)');
    }
  });

  $('#task').on('keyup', function(event){
    if(event.keyCode === 13)
    {
      var li = $(document.createElement('li'));
      var i = $(document.createElement('i'));

      li.text($('#task').val());

      i.addClass('pull-right glyphicon glyphicon-trash');
      li.append(i);

      li.hide().appendTo('#nav').slideDown(1000);

      // $('#nav').append('<li>' + $('#task').val() + '</li>');
      $('#task').val("");
    }
  });

  $('#nav li').on('click','i', function(){
    $(this).parent().remove();
  })
});

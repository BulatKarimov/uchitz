// canvas
var canvas = document.getElementById('sprite');
var ctx = canvas.getContext('2d');
const step = 40;
ctx.strokeStyle = "purple";

var img = new Image();
img.src = 'img/sprite.png';
img.onload = function(){
    ctx.drawImage(img, 0, 0);
  }
// /canvas

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  } // рандомизация

var randX = randomInteger(6, 9);
var randY = randomInteger(5, 8);

if(randX + randY > 14){
   while(randX + randY > 14){
       var randX = randomInteger(6, 9);
       var randY = randomInteger(5, 8);
   }
} // рандомные x y

// первая дуга

const offsetX = 35;
const offsetY = 53;
var position = offsetX + randX * step - 8;
var pointX = (position - offsetX)/2;
const pointY = -20;

    ctx.moveTo(offsetX, offsetY);
    ctx.quadraticCurveTo(pointX, pointY, position, offsetY);
    ctx.lineTo(position - 10, offsetY);
    ctx.moveTo(position, offsetY);
    ctx.lineTo(position - 5, offsetY - 5);
    ctx.stroke();
    ctx.globalCompositeOperation='destination-over';

var input = document.getElementById('first');
    input.style.MozTransform = 'translateX(' + pointX + 'px)';
    input.style.WebkitTransform = 'translateX(' + pointX + 'px)';
    input.style.OTransform = 'translateX(' + pointX + 'px)';
    input.style.MsTransform = 'translateX(' + pointX + ')';
    input.style.transform = 'translateX(' + pointX + 'px)';


// /первая дуга

const title = document.querySelector('#title');

title.innerHTML = '<b id="first_number">' + randX + ' </b>' + '+' + ' <b id="second_number">' + randY + '</b>' + ' = <span id="huy">?</span><input type="text" class="answer hidden" id="final" onchange="sumChecking()"/>'; // титульник
function firstNumberChecking(){
    var first = document.getElementById("first").value;
    if(first == randX){
        document.getElementById("first").classList.remove('false');
        document.getElementById("first_number").classList.remove('false_title');
        document.getElementById("second").classList.remove('hidden');
        document.getElementById("first").classList.add('true');
        document.getElementById("first").setAttribute('readonly', true);
        
        // вторая дуга
        
        const secondOffsetX = position;
        const secondOffsetY = 53;
        var secondPosition = position + randY * step - 8;
        var secondPointX = (secondPosition - position)/2 + position;
        
        ctx.moveTo(secondOffsetX, secondOffsetY);
        ctx.quadraticCurveTo(secondPointX, pointY, secondPosition, offsetY);
        ctx.lineTo(secondPosition - 10, offsetY);
        ctx.moveTo(secondPosition, offsetY);
        ctx.lineTo(secondPosition - 5, offsetY - 5);
        ctx.stroke();
        ctx.globalCompositeOperation='destination-over';
        
        var secondInput = document.getElementById('second');
        secondInput.style.MozTransform = 'translateX(' + (secondPointX-35) + 'px)';
        secondInput.style.WebkitTransform = 'translateX(' + (secondPointX-35) + 'px)';
        secondInput.style.OTransform = 'translateX(' + (secondPointX-35) + 'px)';
        secondInput.style.MsTransform = 'translateX(' + (secondPointX-35) + ')';
        input.style.transform = 'translateX(' + pointX + 'px)';
        
        // /вторая дуга
        
    }else{
        document.getElementById("first").classList.add('false');
        document.getElementById("first_number").classList.add('false_title');
    }
} // првоерка первого числа
function secondNumberChecking(){
    var second = document.getElementById("second").value;

     
    if(second == randY){
        document.getElementById("second").classList.remove('false');
        document.getElementById("second_number").classList.remove('false_title');
        document.getElementById("final").classList.remove('hidden');
        document.getElementById("huy").classList.add('hidden');
        document.getElementById("second").classList.add('true');
        document.getElementById("second").setAttribute('readonly', true);
    }else{
        document.getElementById("second").classList.add('false');
        document.getElementById("second_number").classList.add('false_title');
    }
} // проверка второго числа
function sumChecking(){
    var final = document.getElementById("final").value;
    if(final == randX + randY){
       title.innerHTML  = "<b>" + randX + " + " + randY + " = " + final + "</b>";
        console.log("Верно");
    }else{
        document.getElementById("final").classList.add('false');
    }
} //проверка суммы





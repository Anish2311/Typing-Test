const text = document.getElementById('text')
const input = document.getElementById('input')
input.value = ''
const mistaker = document.getElementById('mistakes')
const accuracy = document.getElementById('accuracy')


var checkingString = '';
var mistakes = []
var x = -1.8;
var k = false
var textCopy = text.innerText
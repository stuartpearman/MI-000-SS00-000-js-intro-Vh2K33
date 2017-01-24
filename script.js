// sounds

var blip = new Audio('sounds/blip.wav')
var coin = new Audio('sounds/coin.wav')
var zap = new Audio('sounds/zap.wav')
var hurt = new Audio('sounds/hurt.wav')

// buttons

var blipButton = document.getElementById('blipButton')
var coinButton = document.getElementById('coinButton')
var zapButton = document.getElementById('zapButton')
var hurtButton = document.getElementById('hurtButton')

function initSound(sound, soundButton) {
	soundButton.addEventListener('mouseenter', function () {
		sound.play()
	})
	soundButton.addEventListener('click', function () {
		sound.play()
	})
}

initSound(blip, blipButton)
initSound(coin, coinButton)
initSound(zap, zapButton)
initSound(hurt, hurtButton)
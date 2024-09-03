'use strict';

let audio = document.getElementById('audio');
let audioBtn = document.getElementById('audiobtn');

document.addEventListener('DOMContentLoaded',function(){
	audio.volume = 0.5;
});

audio.addEventListener('play',function(){
	audioBtn.style.backgroundColor = '#0099ff';
	audio.style.backgroundColor = '#0099ff';
	audioBtn.classList.add('audiobtn-open');
});

audio.addEventListener('pause',function(){
	audioBtn.style.backgroundColor = '#3e424b';
	audio.style.backgroundColor = '#3e424b';
	audioBtn.classList.remove('audiobtn-open');
});

audio.addEventListener('ended',function(){
	audio.play();
});
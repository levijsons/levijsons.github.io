function playSound(soundId) {
    var sound = document.getElementById(soundId);
    sound.play();
}

function stopAllSounds() {
    var sounds = document.querySelectorAll('audio');
    sounds.forEach(function (sound) {
        sound.pause();
        sound.currentTime = 0; // Reset the sound to the beginning
    });
}

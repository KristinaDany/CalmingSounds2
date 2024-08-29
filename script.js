// Function to toggle individual sound playback
function toggleSound(soundId) {
    const sound = document.getElementById(soundId);
    if (sound.paused) {
        sound.play();
    } else {
        sound.pause();
    }
}

// Function to update the volume
document.getElementById('rain-volume').addEventListener('input', function () {
    const volume = this.value;
    document.getElementById('rain').volume = volume;
});

document.getElementById('water-volume').addEventListener('input', function () {
    const volume = this.value;
    document.getElementById('water').volume = volume;
});

document.getElementById('thunder-volume').addEventListener('input', function () {
    const volume = this.value;
    document.getElementById('thunder').volume = volume;
});

// Function to toggle all sounds simultaneously
function toggleAllSounds() {
    const sounds = ['rain', 'water', 'thunder'];
    let allPaused = sounds.every(id => document.getElementById(id).paused);

    sounds.forEach(id => {
        const sound = document.getElementById(id);
        if (allPaused) {
            sound.play();
        } else {
            sound.pause();
        }
    });

    document.getElementById('toggle-all-sounds').textContent = allPaused ? 'Pause All' : 'Play All';
}

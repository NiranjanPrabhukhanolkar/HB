function playMusic() {
    var audio = document.getElementById('birthday-song');
    audio.play().then(() => {
        console.log('Playing');
    }).catch(function(error) {
        console.log('Error playing audio: ', error);
    });
}
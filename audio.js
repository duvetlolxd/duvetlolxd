const songs = [
    { title: "Reality Surf - bladee", url: "/songs/1.mp3" },
    { title: "aint it fun - TXKUMOON", url: "/songs/2.mp3" },
    { title: "VIDEOCLUB - Roi", url: "/songs/3.mp3" }

];

function playRandomSong() {
    const audio = document.querySelector('audio');
    if (audio) {
        audio.pause();
        audio.remove();

    }

    const randomSong = songs[Math.floor(Math.random() * songs.length)];

    const newAudio = new Audio(randomSong.url);
    newAudio.play();

    document.getElementById('currentSong').textContent = `Currently Playing: ${randomSong.title}`;
}

window.onload = playRandomSong;

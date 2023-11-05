/**
 * CLXD
 * all the code for playing music, and changing playlists
 * <div 'container'><div 'nav-bar'>
 */

const image = document.getElementById('cover'),
    title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    playerProgress = document.getElementById('play-progress'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play'),
    background = document.getElementById('bg-img'),
    artistImg = document.getElementById('artist-image');
const music = new Audio();

const songs =
    [
        [ /* Grandson -> I Love You, I'm Trying*/
            {
                path: 'Music/grandson Two Along Their Way.mp3',
                displayName: 'Two Along Their Way',
                cover: 'img/ILoveYouImTryingCover.jpg',
                artist: 'grandson'
            },
            {
                path: 'Music/grandson - Eulogy.mp3',
                displayName: 'Eulogy',
                cover: 'assets/2.jpg',
                artist: 'grandson'
            },
            {
                path: 'Music/grandson - Something To Hide.mp3',
                displayName: 'Something To Hide',
                cover: 'assets/3.jpeg',
                artist: 'grandson'
            },
            {
                path: 'Music/grandson - Drones.mp3',
                displayName: 'Drones',
                cover: 'assets/4.jpg',
                artist: 'grandson'
            },
            {
                path: 'Music/grandson - I Love You_ I_m Trying.mp3',
                displayName: 'I Love You, I\'m Trying',
                cover: 'img/ILoveYouImTryingCover.jpg',
                artist: 'grandson'
            },
            {
                path: 'Music/grandson - Half My Heart.mp3',
                displayName: 'Half My Heart',
                cover: 'img/ILoveYouImTryingCover.jpg',
                artist: 'grandson'
            },
            {
                path: 'Music/grandson - When the Bomb Goes.mp3',
                displayName: 'When the Bomb Goes',
                cover: 'img/ILoveYouImTryingCover.jpg',
                artist: 'grandson'
            },
            {
                path: 'Music/grandson - Enough.mp3',
                displayName: 'Enough',
                cover: 'img/ILoveYouImTryingCover.jpg',
                artist: 'grandson'
            },
            {
                path: 'Music/grandson - Murderer.mp3',
                displayName: 'Murderer',
                cover: 'img/ILoveYouImTryingCover.jpg',
                artist: 'grandson'
            },
            {
                path: 'Music/grandson - I Will Be Here When You_re Ready To Wake Up (feat. Wafia).mp3',
                displayName: 'I Will Be Here When You\'re Ready To Wake Up',
                cover: 'img/ILoveYouImTryingCover.jpg',
                artist: 'grandson'
            },
            {
                path: 'Music/grandson - Heather.mp3',
                displayName: 'Heather',
                cover: 'img/ILoveYouImTryingCover.jpg',
                artist: 'grandson'
            },
            {
                path: 'Music/grandson - Stuck Here With Me.mp3',
                displayName: 'Stuck Here With Me',
                cover: 'img/ILoveYouImTryingCover.jpg',
                artist: 'grandson'
            }
        ],
        [ /* Whethan -> Fantasy */
            {
                path: 'Music/Whethan - Intro.mp3',
                displayName: 'Intro',
                cover: 'img/Whethan-Fantasy.png',
                artist: 'Whethan'
            },
            {
                path: 'Music/Whethan - Freefall.mp3',
                displayName: 'Freefall',
                cover: 'img/Whethan-Fantasy.png',
                artist: 'Whethan'
            },
            {
                path: 'Music/Whethan - In the Summer.mp3',
                displayName: 'In the Summer',
                cover: 'img/Whethan-Fantasy.png',
                artist: 'Whethan'
            },
            {
                path: 'Music/Whethan - Hurting on Purpose.mp3',
                displayName: 'Hurting on Purpose',
                cover: 'img/Whethan-Fantasy.png',
                artist: 'Whethan'
            },
            {
                path: 'Music/Whethan - Drumdown Mambo.mp3',
                displayName: 'Drumdown Mambo',
                cover: 'img/Whethan-Fantasy.png',
                artist: 'Whethan'
            },
            {
                path: 'Music/Whethan - Sunshine.mp3',
                displayName: 'Sunshine',
                cover: 'img/Whethan-Fantasy.png',
                artist: 'Whethan'
            },
            {
                path: 'Music/Whethan - So Good.mp3',
                displayName: 'So Good',
                cover: 'img/Whethan-Fantasy.png',
                artist: 'Whethan'
            },
            {
                path: 'Music/Whethan - Clouds.mp3',
                displayName: 'Clouds',
                cover: 'img/Whethan-Fantasy.png',
                artist: 'Whethan'
            },
            {
                path: 'Music/Whethan - All In My Head.mp3',
                displayName: 'All In My Head',
                cover: 'img/Whethan-Fantasy.png',
                artist: 'Whethan'
            },
            {
                path: 'Music/Whethan - Ocean Energy.mp3',
                displayName: 'Ocean Energy',
                cover: 'img/Whethan-Fantasy.png',
                artist: 'Whethan'
            },
            {
                path: 'Music/Whethan - All I Needed.mp3',
                displayName: 'All I Needed',
                cover: 'img/Whethan-Fantasy.png',
                artist: 'Whethan'
            },
            {
                path: 'Music/Whethan - Stay Forever.mp3',
                displayName: 'Stay Forever',
                cover: 'img/Whethan-Fantasy.png',
                artist: 'Whethan'
            },
            {
                path: 'Music/Whethan - Wave.mp3',
                displayName: 'Wave',
                cover: 'img/Whethan-Fantasy.png',
                artist: 'Whethan'
            },
            {
                path: 'Music/Whethan - Upside Down.mp3',
                displayName: 'Upside Down',
                cover: 'img/Whethan-Fantasy.png',
                artist: 'Whethan'
            },
            {
                path: 'Music/Whethan - Outta Here.mp3',
                displayName: 'Outta Here',
                cover: 'img/Whethan-Fantasy.png',
                artist: 'Whethan'
            }
        ]
    ];

let musicIndex = 0;
let albumIndex = 0;
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function playMusic() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;

    /* bad implementation */
    if (artist.textContent === 'grandson') {
        artistImg.src = 'img/grandson.jpg';
    } else if (artist.textContent === 'Whethan') {
        artistImg.src = 'img/Whethan.png';
    }

    if (song.displayName === "I Will Be Here When You're Ready To Wake Up") {
        title.style.fontSize = '17px';
    } else {
        title.style.fontSize = '';
    }
}

function changeMusic(direction) {
    // musicIndex = (musicIndex + direction + songs.length) % songs.length;
    musicIndex = (musicIndex + direction + songs[albumIndex].length) % songs[albumIndex].length;
    loadMusic(songs[albumIndex][musicIndex]);
    playMusic();
}

function updateProgressBar() {
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

const element1 = document.getElementById('playlist-item1');
const element2 = document.getElementById('playlist-item2');

element1.addEventListener("click", function () {
    albumIndex = 0;
    musicIndex = 0; // Cambiar a la primera canción del álbum
    loadMusic(songs[albumIndex][musicIndex]);
    playMusic();
});

element2.addEventListener('click', function () {
    albumIndex = 1;
    musicIndex = 0; // Cambiar a la primera canción del álbum
    loadMusic(songs[albumIndex][musicIndex]);
    playMusic();
});

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[albumIndex][musicIndex]);
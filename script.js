const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const shuffleBtn = document.getElementById("shuffle");
const trackName = document.getElementById("current-track");
const list = document.getElementById("track-list");
const toggleListBtn = document.getElementById("toggle-list");

const tracks = [
  "music/jingle-bell-rock.mp3",
  "music/last-christmas.mp3",
  "music/all-i-want-for-christmas-is-you.mp3",
  "music/let-it-snow.mp3",
  "music/rockin-around-the-christmas-tree.mp3",
  "music/reindeer.mp3",
  "music/driving-home-for-christmas.mp3",
  "music/happy-new-year.mp3",
  "music/look-a-lot-like-christmas.mp3", 
  "music/little-christmas.mp3",
  "music/Where-Is-Santa.mp3",
  "music/santa-boy.mp3",
  "music/This-Christmas.mp3",
  "music/Santa -Claus-Is-Coming-To-Town.mp3",
  "music/Oh-Santa.mp3",
  "music/Magic-Moments.mp3",
  "music/Magia-De-Craciun.mp3",
  "music/Loneliest-Time-Of-Year.mp3",
  "music/At-Chrismas-Time.mp3",
  "music/feliz-navidad.mp3",
  "music/Be-Home-For-Christmas.mp3",
  "music/HAPPY-NEW-YEAR2.mp3",
  "music/happy-new-year.mp3",
  "music/Frosty-the-Snowman.mp3",
  "music/BLame-It-On-The-Misletoe.mp3",
  

  
];

let currentIndex = 0;
let isPlaying = false;
let isShuffle = false;
let listOpen = false;

function renderList() {
  list.innerHTML = "";
  tracks.forEach((track, index) => {
    const li = document.createElement("li");
    li.textContent = track.replace("music/", "");
    li.onclick = () => {
      currentIndex = index;
      loadTrack();
      playTrack();
    };
    if (index === currentIndex) li.classList.add("active");
    list.appendChild(li);
  });
}

function loadTrack() {
  audio.src = tracks[currentIndex];
  trackName.textContent = tracks[currentIndex].replace("music/", "");
  renderList();
}

function playTrack() {
  audio.play();
  isPlaying = true;
  playBtn.textContent = "⏸";
}

function pauseTrack() {
  audio.pause();
  isPlaying = false;
  playBtn.textContent = "▶";
}

playBtn.onclick = () => isPlaying ? pauseTrack() : playTrack();

nextBtn.onclick = () => {
  currentIndex = isShuffle
    ? Math.floor(Math.random() * tracks.length)
    : (currentIndex + 1) % tracks.length;
  loadTrack();
  playTrack();
};

prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + tracks.length) % tracks.length;
  loadTrack();
  playTrack();
};

shuffleBtn.onclick = () => {
  isShuffle = !isShuffle;
  shuffleBtn.style.opacity = isShuffle ? "1" : "0.5";
};

toggleListBtn.onclick = () => {
  listOpen = !listOpen;
  list.classList.toggle("show", listOpen);
  toggleListBtn.textContent = listOpen
    ? "Скрыть список"
    : "Показать весь список";
};

audio.onended = () => nextBtn.onclick();

loadTrack();
renderList();

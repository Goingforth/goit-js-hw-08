import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

//const player = new Vimeo.Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

const startTimePlay = localStorage.getItem(STORAGE_KEY)
  ? JSON.parse(localStorage.getItem(STORAGE_KEY))
  : 0;

player.setCurrentTime(startTimePlay);

player.on('timeupdate', throttle(saveTimePlay, 1000));

function saveTimePlay(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data.seconds));
}

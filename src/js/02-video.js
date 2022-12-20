import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}

setCurrentTime();

function setCurrentTime() {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (!savedTime) {
    return;
  }

  player.setCurrentTime(savedTime);
}

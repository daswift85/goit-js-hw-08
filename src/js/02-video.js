import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const player = new Player('vimeo-player');

player.on('timeupdate', throttle(() => {
player.getCurrentTime().then((seconds) => {
localStorage.setItem('videoplayer-current-time', seconds);
});
}, 1000));

const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
player.setCurrentTime(currentTime);
}
console.log(player);

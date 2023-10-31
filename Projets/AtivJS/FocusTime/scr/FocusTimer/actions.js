import states from './state.js';

export function toggleRunning() {
  states.isRunning = document.documentElement.classList.toggle('running');
}

export function reset() {
  states.isRunning = false;
  document.documentElement.classList.remove('running');
}

export function set() {

}

export function toggleMusic() {
  states.isMute = document.documentElement.classList.toggle('music-on');
}


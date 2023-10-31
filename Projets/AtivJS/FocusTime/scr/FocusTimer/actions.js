import states from './state.js';
import * as timer from './timer.js'

export function toggleRunning() {
  states.isRunning = document.documentElement.classList.toggle('running');

  timer.countdown()
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


import './toggle-mode.js'
import * as FocusTimer from './FocusTimer/index.js'
import state from './FocusTimer/state.js'


FocusTimer.start(state.minutes, state.seconds)

import { AbstarctView } from '../../common/view.js';
import onChange from 'on-change';

// eslint-disable-next-line no-unused-vars
export class MainView extends AbstarctView {
  state = {
    list: [],
    loading: false,
    searchQuery: undefined,
    offset: 0
  }

  constructor(appState) {
    super();
    this.appState = appState;
    this.appState = onChange(this.appState, this.appStateHook.bind(this));
    this.setTitle('Search book')
  }

  appStateHook(path) {
    if (path === 'favorites') {
      console.log(path);
    }
  }

  render() {
    const content = document.createElement('div');
    content.textContent = `Amount of books: ${this.appState.favorites.length}`
    this.app.innerHTML = '';
    this.app.append(content);
    this.appState.favorites.push('Logan')
  }
}
import { AbstarctView } from '../../core/view.js';
import onChange from 'on-change';
import { Header } from '../../components/header/header.js';
import { Search } from '../../components/search/search.js';
import { CardList } from '../../components/card-list/card-list.js';


export class MainView extends AbstarctView {
  state = {
    list: [],
    loading: false,
    numFound: 0,
    searchQuery: undefined,
    offset: 0
  }

  constructor(appState) {
    super();
    this.appState = appState;
    this.appState = onChange(this.appState, this.appStateHook.bind(this));
    this.state = onChange(this.state, this.stateHook.bind(this));
    this.setTitle('Search book')
  }

  destroy() {
    onChange.unsubscribe(this.appState);
    onChange.unsubscribe(this.state);
  }

  appStateHook(path) {
    if (path === 'favorites') {
      this.render()
    }
  }

  async stateHook(path) {
    if (path === 'searchQuery') {
      this.state.loading = true;
      const data = await this.loadList(this.state.searchQuery, this.state.offset);
      this.state.loading = false;
      console.log(data);
      this.state.numFound = data.numFound;
      this.state.list = data.docs;
    }

    if (path === 'list' || path === 'loading') {
      this.render()
    }
  }

  async loadList(q, offset) {
    const res = await fetch(`https://openlibrary.org/search.json?q=${q}&offset=${offset}`);
    return res.json()
  }

  render() {
    const main = document.createElement('div');
    main.append(new Search(this.state).render())
    const countOfFoundedBooks = document.createElement('h1');
    countOfFoundedBooks.classList.add('list__count');
    countOfFoundedBooks.innerHTML = `Found ${this.state.numFound} books`;
    main.append(countOfFoundedBooks)
    main.append(new CardList(this.appState, this.state).render())
    this.app.innerHTML = '';
    this.app.append(main);
    this.renderHeader();
  }

  renderHeader() {
    const header = new Header(this.appState).render();
    this.app.prepend(header);
  }
}
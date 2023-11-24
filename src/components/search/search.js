import { DivComponent } from '../../core/div-component';
import './search.css';

export class Search extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  serach() {
    const value = this.el.querySelector('input').value;
    this.state.searchQuery = value;
  }

  render() {
    this.el.classList.add('search');
    this.el.innerHTML = `
      <div class="search__wrapper">
        <input
          class="search__input"
          type="text"
          value="${this.state.searchQuery ? this.state.searchQuery : ''}"
          placeholder="Find book or author..."
        />
        <img src="/static/search.svg" alt="Search" />
      </div>
      <button aria-label="search">
       <img src="/static/search-white.svg" alt="Search" />
      </button>
    `
    this.el.querySelector('button').addEventListener('click', this.serach.bind(this));
    this.el.querySelector('input').addEventListener('keydown', (e) => {
      if (e.code === 'Enter') {
        this.serach();
      }
    });
    return this.el
  }
}
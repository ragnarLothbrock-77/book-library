import { DivComponent } from '../../core/div-component';
import './search.css';

export class Search extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
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

    return this.el
  }
}
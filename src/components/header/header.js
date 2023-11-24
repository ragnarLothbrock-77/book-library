import { DivComponent } from '../../core/div-component';
import './header.css';

export class Header extends DivComponent {
  constructor(appState) {
    super();
    this.appState = appState;
  }

  render() {
    this.el.classList.add('header');
    this.el.innerHTML = `
      <div>
        <img src="/static/book-lib-logo.svg" alt="App Logo"/>
      </div>
      <div class="menu">
        <a class="menu__item" href="#">
          <img src="/static/search.svg" alt="Search Icon"/>
          Books search
        </a>
        <a class="menu__item" href="#favorites">
          <img src="/static/favorites.svg" alt="Favorites Icon"/>
          Favorites books 
          <div class="menu__counter">
            ${this.appState.favorites.length}
          </div>
        </a>
      </div>
    `

    return this.el
  }
}
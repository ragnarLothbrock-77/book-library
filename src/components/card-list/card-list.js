import { DivComponent } from '../../core/div-component';
import { Card } from '../card/card';
import './card-list.css';


export class CardList extends DivComponent {
  constructor(appState, parentState) {
    super();
    this.appState = appState;
    this.parentState = parentState;
  }


  render() {
    if (this.parentState.loading) {
      this.el.classList.add('loader__wrapper')
      this.el.innerHTML = `
        <span class="loader"></span>
      `
      return this.el;
    }

    const cardGrid = document.createElement('div');
    cardGrid.classList.add('card-grid');
    this.el.append(cardGrid);
    for (const card of this.parentState.list) {
      cardGrid.append(new Card(this.appState, card).render())
    }
    return this.el
  }
}
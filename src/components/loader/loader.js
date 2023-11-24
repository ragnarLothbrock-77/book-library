import { DivComponent } from '../../core/div-component';
import './loader.css';


export class Loader extends DivComponent {
  render() {
    this.el.classList.add('loader__wrapper');
    this.el.innerHTML = `
      <span class="loader"></span>
    `
    return this.el
  }
}
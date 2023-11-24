// eslint-disable-next-line no-unused-vars
export class AbstarctView {
  constructor() {
    this.app = document.getElementById('root');
  }

  setTitle(title) {
    document.title = title;
  }

  render() {
    return;
  }

  destroy() {
    return;
  }
}
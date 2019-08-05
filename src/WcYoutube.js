import { html, css, LitElement } from 'lit-element';

export class WcYoutube extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
      url: { type: String },
      autoplay: {type: Boolean},
      controls: {type: Boolean},
      start: {type: Number},
      end: {type: Number},
      fullscreen: {type: Boolean}
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
    this.url = 'https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG';
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
    <pre>${this.url}</pre>
    <iframe width="560" height="315" src="${this.url}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    `;
  }
}

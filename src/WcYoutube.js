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
      videoId: { type: String },
      autoplay: { type: Number },
      start: { type: Number },
      end: { type: Number },
      width: { type: Number },
      height: { type: Number },
      cc_lang_pref: { type: String },
      cc_load_policy: { type: Number },
      color: { type: String },
      controls: { type: Number },
      disablekb: { type: Number },
      enablejsapi: { type: Number },
      fs: { type: Number },
      hl: { type: String },
      iv_load_policy: { type: Number },
      list: { type: String },
      listType: { Type: String },
      loop: { type: Number },
      modestbranding: { type: Number },
      origin: { type: Number },
      playlist: { type: Array },
      playsinline: { type: Number },
      widget_referrer: { type: String }
    };
  }

  constructor() {
    super();

    this.autoplay = 0;
    this.cc_lang_pref = 'en'; // full list of ISO 639-1 codes, see http://www.loc.gov/standards/iso639-2/php/code_list.php
    this.controls = 1;
    this.disablekb = 0;
    this.enablejsapi = 0;
    this.fs = 1;
    this.hl = 'en';
    this.iv_load_policy = 1;
    this.loop = 0;
    this.origin = window.location.origin;
    this.widget_referrer = window.location.href;
    this.playlist = [];
    this.playsinline = 0;
  }

  get generateVideoUrl() {
    let options = {};
    let url = `https://www.youtube.com/embed`;
    console.log('TYPE', this.listType, this.list);
    url += (this.listType && this.list) ? `?listType=${this.listType}&list=${this.list}&` : `/${this.videoId}?`;

    this.autoplay === 1 ? options['autoplay'] = String(this.autoplay) : null;
    this.start ? options['start'] = String(this.start) : null;
    this.end ? options['end'] = String(this.end) : null;
    this.cc_lang_pref ? options['cc_lang_pref'] = String(this.cc_lang_pref) : null;
    this.cc_load_policy === 1 ? options['cc_load_policy'] = String(this.cc_load_policy) : null;
    this.color === 'red' || this.color === 'white' ? options['color'] = String(this.color) : null;
    this.controls === 1 ? options['controls'] = String(this.controls) : null;
    this.disablekb === 1 ? options['disablekb'] = String(this.disablekb) : null;
    this.enablejsapi === 1 ? options['enablejsapi'] = String(this.enablejsapi) : null;
    this.fs === 1 ? options['fs'] = String(this.fs) : null;
    this.hl === 1 ? options['hl'] = String(this.hl) : null;
    this.iv_load_policy === 1 ? options['iv_load_policy'] = String(this.iv_load_policy) : null;
    this.loop === 1 ? options['loop'] = String(this.loop) : null;
    this.playsinline === 1 ? options['playsinline'] = String(this.playsinline) : null;
    this.origin ? options['origin'] = this.origin : null;
    this.widget_referrer ? options['widget_referrer'] = this.widget_referrer : null;
    this.modestbranding === 1 && this.color !== 'white' ? options['modestbranding'] = this.modestbranding : null;

    url += Object.keys(options).map(key => `${key}=${options[key]}`).join('&');
    return url;
  }

  render() {
    return html`<iframe width = "${this.width}" height = "${this.height}" src="${this.generateVideoUrl}" frameborder="0" allow="${this.autoplay ? 'autoplay' : ''}; encrypted-media" allowfullscreen></iframe>`;
  }
}

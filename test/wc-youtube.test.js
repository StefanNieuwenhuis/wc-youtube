import { html, fixture, expect } from '@open-wc/testing';

import '../wc-youtube.js';

describe('WcYoutube', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture(html`
      <wc-youtube></wc-youtube>
    `);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('shows initially the text "hey there Nr. 5!" and an "increment" button', async () => {
    const el = await fixture(html`
      <wc-youtube></wc-youtube>
    `);

    expect(el).shadowDom.to.equal(`
      <h2>Hey there Nr. 5!</h2>
      <button>increment</button>
    `);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture(html`
      <wc-youtube></wc-youtube>
    `);
    el.shadowRoot.querySelector('button').click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture(html`
      <wc-youtube title="attribute title"></wc-youtube>
    `);

    expect(el.title).to.equal('attribute title');
  });
});

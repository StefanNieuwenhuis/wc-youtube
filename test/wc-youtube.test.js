import { html, fixture, expect } from '@open-wc/testing';

import '../wc-youtube.js';

describe('WcYoutube', () => {
  it('renders', async () => {
    const el = await fixture(html`<wc-youtube></wc-youtube>`);
    expect(el).not.to.be.null;
    expect(el).not.to.be.undefined;
  });

  it('has a videoId', async () => {
    const el = await fixture(html`
      <wc-youtube videoId="M7lc1UVf-VE"></wc-youtube
    `);
    expect(el.videoId).to.equal('M7lc1UVf-VE');
  });
});

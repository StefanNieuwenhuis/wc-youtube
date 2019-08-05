import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { WcYoutube } from '../src/WcYoutube.js';
import '../wc-youtube.js';

storiesOf('wc-youtube', module)
  .addDecorator(withKnobs)
  .add('Default (ID = M7lc1UVf-VE)', () => withClassPropertiesKnobs(WcYoutube, {
    template: html`<wc-youtube videoId="M7lc1UVf-VE"></wc-youtube>`
  }))
  .add(
    'With playlist (ID = PLC77007E23FF423C6)',
    () => html`
      <wc-youtube listType="playlist" list="PLC77007E23FF423C6"></wc-youtube>
    `,
  )
  .add('With user (ID = Google)', 
  () => html`
  <wc-youtube listType="user_uploads" list="Google"></wc-youtube>
  `)
  .add('With query (query = Google)', 
  () => html`
  <wc-youtube listType="search" list="Google"></wc-youtube>
  `);

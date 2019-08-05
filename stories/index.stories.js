import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { WcYoutube } from '../src/WcYoutube.js';
import '../wc-youtube.js';

storiesOf('wc-youtube', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(WcYoutube))
  .add(
    'Alternative Title',
    () => html`
      <wc-youtube .title=${'Something else'}></wc-youtube>
    `,
  );

import { createCompatibilityConfig } from '@open-wc/building-rollup';

const configs = createCompatibilityConfig({ input: './index.html' });

export default configs.map(config => ({
  ...config,
  output: {
    ...config.output,
    sourcemap: false
  },
  plugins: [
    ...config.plugins
  ],
}));
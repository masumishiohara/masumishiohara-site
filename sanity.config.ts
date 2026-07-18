import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  name: 'default',
  title: 'Masumi Shiohara Studio',
  projectId: '2jvxj72p',
  dataset: 'production',
  basePath: '/studio',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});

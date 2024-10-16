import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'FlexHub_Portfolio',

  projectId: 'mb1yoezh',
  dataset: 'flex_hub',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

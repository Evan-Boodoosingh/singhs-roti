import { type SchemaTypeDefinition } from 'sanity'
import { category } from './category'
import { menuItem } from './menuItem'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, menuItem],
}
import { groq } from 'next-sanity'

export const MENU_QUERY = groq`
  *[_type == "category"] | order(order asc) {
    _id,
    title,
    note,
    order,
    items[] {
      name,
      price,
      description,
      available
    }
  }
`
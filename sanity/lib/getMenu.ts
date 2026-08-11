import { client } from './client'
import { MENU_QUERY } from '../queries'

export type MenuItem = {
  name: string
  price: number
  description?: string
  available?: boolean
}

export type MenuCategory = {
  _id: string
  title: string
  note?: string
  order: number
  items?: MenuItem[]
}

export async function getMenu(): Promise<MenuCategory[]> {
  return client.fetch(MENU_QUERY)
}
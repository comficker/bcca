export interface Links {
    next: string
    previous: string
}


export interface User {
    id: number
    first_name: string
    last_name: string
    username: string,
    meta: {
        coloring: {
            current?: string,
            editor?: string
        }
    }
}


export interface ResponseUser {
    instance: any
    properties: any[]
    links: Links
    count: number
    page_size: number
    num_pages: number
    results: User[]
}

export interface ResponsePost {
  instance: any
  properties: any[]
  links: Links
  count: number
  page_size: number
  num_pages: number
  results: Post[]
}

export interface Post {
  id: number
  meta: Meta
  updated: string
  created: string
  db_status: number
  title: string
  id_string: string
  desc: string
  image: string
}

export interface Meta {
  fake: boolean
  scam: boolean
  verified: boolean
  broadcast: boolean
  gigagroup: boolean
  megagroup: boolean
  restricted: boolean
  signatures: boolean
  access_hash: number
  join_request: boolean
  can_view_stats: boolean
  can_set_location: boolean
  can_set_stickers: boolean
  can_set_username: boolean
  can_view_participants: boolean
  vote_count: number
}

export interface Media {
  sizes: Sizes
  path: string
}

export interface Sizes {
  thumb_24: string
  thumb_128: string
}

export interface ShortUser {
  id: number
  first_name: string
  last_name: string
  username: string
}

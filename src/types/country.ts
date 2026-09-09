export interface Country {
  names: {
    common: string
    official: string
  }

  codes: {
    alpha_2: string
    alpha_3: string
  }

  capitals?: {
    name: string
  }[]

  region: string

  subregion: string

  flag: {
    emoji: string
    url_png: string
    url_svg: string
  }
}
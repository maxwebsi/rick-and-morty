export interface ResponseEpisodeType {
    info: InfoEpisodeType
    results: EpisodeType[]
}

export interface InfoEpisodeType {
    count: number
    pages: number
    next: any
    prev: any
}

export interface EpisodeType {
    id: number
    name: string
    air_date: string
    episode: string
    characters: string[]
    url: string
    created: string
}

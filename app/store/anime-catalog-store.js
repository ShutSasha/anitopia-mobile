import { makeAutoObservable } from 'mobx'

export default class AnimeCatalogStore {
   catalogAnimeData = []
   sortType = ''
   sortBy = ''
   genres = []
   kinds = []
   mpaa = []
   year_start = ''
   year_end = ''
   episodes_start = ''
   episodes_end = ''
   totalLength = 0

   constructor() {
      makeAutoObservable(this)
      this.setGenres = this.setGenres.bind(this)
      this.setKind = this.setKind.bind(this)
      this.setMPAA = this.setMPAA.bind(this)
      this.setSortType = this.setSortType.bind(this)
      this.setSortBy = this.setSortBy.bind(this)
   }

   setCatalog(animeData) {
      this.catalogAnimeData = animeData
   }

   setTotalLength(length) {
      this.totalLength = length
   }

   setSortType(type) {
      console.log(type)
      this.sortType = type
   }

   setSortBy(by) {
      this.sortBy = by
   }

   setGenres(genres) {
      this.genres = genres
   }

   setKind(kinds) {
      this.kinds = kinds
   }

   setMPAA(mpaa) {
      this.mpaa = mpaa
   }

   setYearStart(year) {
      this.year_start = year
   }

   setYearEnd(year) {
      this.year_end = year
   }

   setEpisodesStart(episodes) {
      this.episodes_start = episodes
   }

   setEpisodesEnd(episodes) {
      this.episodes_end = episodes
   }
}

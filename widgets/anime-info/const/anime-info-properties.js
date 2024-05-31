export const getAnimeInfoProperties = (animeInfo) => {
   return [
      {
         property: 'Статус: ',
         propertyValue: animeInfo.status || 'невідомий',
      },
      {
         property: 'Епізоди: ',
         propertyValue: `${animeInfo.airedEpisodes || '0'}/${animeInfo.totalEpisodes || '?'}`,
      },
      {
         property: 'Тип: ',
         propertyValue: animeInfo.type || 'невідомий',
      },
      {
         property: 'Вікові обмеження: ',
         propertyValue: `${animeInfo.minimalAge ? animeInfo.minimalAge + '+' : 'відсутні'}`,
      },
      {
         property: 'Жанри: ',
         propertyValue: `${animeInfo.genres && animeInfo.genres.length > 0 ? animeInfo.genres.join(', ') : 'не вказані'}`,
      },
      {
         property: 'Рік випуску: ',
         propertyValue: animeInfo.year || 'невідомий',
      },
   ]
}

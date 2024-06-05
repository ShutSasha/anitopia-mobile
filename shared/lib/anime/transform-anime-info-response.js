import React from 'react'

const translateAnimeKind = (animeKind) => {
   if (animeKind === 'tv') {
      return 'ТВ Серіал'
   }
   return 'Спешл'
}

const translateStatus = (statusAnime) => {
   const statuses = {
      released: 'Вийшов',
      ongoing: 'Онгоінг',
   }

   return statuses[statusAnime] || statusAnime
}

const AiredEpisodesValidation = (lastEpisode, episodesAired, totalEpisodes, statusAnime) => {
   return statusAnime === 'released' ? totalEpisodes : episodesAired > lastEpisode ? episodesAired : lastEpisode
}

export const transformResponseToAnime = (res) => {
   const { _id, title, shikimori_id, link, last_episode, year, material_data } = res.data

   const {
      episodes_aired,
      episodes_total,
      anime_status,
      poster_url,
      anime_kind,
      minimal_age,
      description,
      anime_genres,
   } = material_data

   return {
      _id,
      title: title,
      link,
      shikimori_id,
      airedEpisodes: AiredEpisodesValidation(last_episode, episodes_aired, episodes_total, anime_status),
      posterURL: poster_url,
      screenshots: res.data.screenshots || material_data.screenshots,
      type: translateAnimeKind(anime_kind),
      status: translateStatus(anime_status),
      totalEpisodes: episodes_total,
      minimalAge: minimal_age,
      description,
      genres: anime_genres,
      year,
      material_data: material_data || {},
   }
}

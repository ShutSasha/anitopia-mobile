import React, { useEffect, useState } from 'react'
import { Container } from '../../container'
import { MainTitle } from '../../main-title'
import { useStore } from '../../../hooks/useStore'
import { BackgroundPhoto } from '../../../entities/background-photo'
import { UserPhotoAndNickname } from '../../../entities/user-photo-and-nickname'
import { UserInfo } from '../../../entities/user-info'
import { observer } from 'mobx-react-lite'

const userDataTitles = ['Дата реєстрації', "Ім'я", 'Прізвище', 'Країна', 'Стать', 'Вік', 'Про себе']

export const UserData = observer(() => {
   const { store } = useStore()

   const getValueOrDefault = (value) => {
      return value ? value : 'Не вказано'
   }

   const formatDate = (dateString) => {
      const date = new Date(dateString)
      const day = String(date.getDate()).padStart(2, '0')
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const year = date.getFullYear()
      return `${day}.${month}.${year}`
   }

   const userData = {
      'Дата реєстрації': store.user ? formatDate(store.user.registrationDate) : 'Не вказано',
      "Ім'я": getValueOrDefault(store.user?.firstName),
      Прізвище: getValueOrDefault(store.user?.lastName),
      Країна: getValueOrDefault(store.user?.country),
      Стать: getValueOrDefault(store.user?.sex),
      Вік: getValueOrDefault(store.user?.age),
      'Про себе': getValueOrDefault(store.about),
   }

   return (
      <Container styles={{ width: '100%' }}>
         <MainTitle nameOfTheBlock={'Профіль'} topBorder={false} />
         <BackgroundPhoto backgroundPicture={require('../../../assets/animeCover.png')} />
         <UserPhotoAndNickname
            nickname={getValueOrDefault(store.user.username)}
            userRoles={store.user.roles}
            about={store.about}
            photo={getValueOrDefault(store.user.avatarLink)}
         />
         {userDataTitles.map((title) => (
            <UserInfo key={title} label={title} value={userData[title]} />
         ))}
      </Container>
   )
})

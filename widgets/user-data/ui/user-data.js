import React from 'react'
import { Container } from '../../container'
import { MainTitle } from '../../main-title'
import { useStore } from '../../../hooks/useStore'
import { BackgroundPhoto } from '../../../entities/background-photo'
import { UserPhotoAndNickname } from '../../../entities/user-photo-and-nickname'
import { UserInfo } from '../../../entities/user-info'

const userDataTitles = ['Дата реєстрації', "Ім'я", 'Прізвище', 'Країна', 'Стать', 'Вік']

export const UserData = () => {
   const { store } = useStore()

   const { username, roles, avatarLink, registrationDate, firstName, lastName, country, sex, age } = store.user

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
      'Дата реєстрації': formatDate(registrationDate),
      "Ім'я": getValueOrDefault(firstName),
      Прізвище: getValueOrDefault(lastName),
      Країна: getValueOrDefault(country),
      Стать: getValueOrDefault(sex),
      Вік: getValueOrDefault(age),
   }

   return (
      <Container styles={{ width: '100%' }}>
         <MainTitle nameOfTheBlock={'Профіль'} topBorder={false} />
         <BackgroundPhoto backgroundPicture={require('../../../assets/my-hero-academ-cover.webp')} />
         <UserPhotoAndNickname
            nickname={getValueOrDefault(username)}
            userRoles={roles}
            photo={getValueOrDefault(avatarLink)}
         />
         {userDataTitles.map((title) => (
            <UserInfo key={title} label={title} value={userData[title]} />
         ))}
      </Container>
   )
}

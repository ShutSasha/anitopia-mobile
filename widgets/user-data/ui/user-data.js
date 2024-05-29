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

   const userData = {
      'Дата реєстрації': registrationDate,
      "Ім'я": firstName,
      Прізвище: lastName,
      Країна: country,
      Стать: sex,
      Вік: age,
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
            <UserInfo key={title} label={title} value={getValueOrDefault(userData[title])} />
         ))}
      </Container>
   )
}

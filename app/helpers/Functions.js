/*
function checkServerMessageError(error: any) {
   if (error.response && error.response.data) {
      if (error.response.data.errors && error.response.data.errors[0]) return error.response.data.errors[0].msg

      if (error.response.data.message) return error.response.data.message

      return undefined
   }
}

export function handleFetchError(error: any) {
   let ServerMessageError = checkServerMessageError(error)

   //Client error - params/flood/ect.
   // How to use it? Just - throw new AnitopiaServerError("Not found", 404)
   // where first parameter is error message and the second is status code
   if (error instanceof AnitopiaServerError) {
      console.log('handleFetchError:', 1)
      showNotice(error.message, error.title, 'error')
   }
   //check message from server
   else if (ServerMessageError !== undefined) {
      showNotice(ServerMessageError, 'Помилка', 'error')
   }
   // Fetch failed error
   else if (error instanceof TypeError) {
      console.log('handleFetchError:', 2)
      showNotice('Немає доступу до сервера.\nПеревірте інтеренет підключення.', 'Ви офлайн :(', 'error')
   }
   //JSON decode error
   else if (error instanceof SyntaxError) {
      console.log('handleFetchError:', 3)
      showNotice(
         'Невідома помилка сервера...\nСпробуйте ще раз або напишіть нам.',
         'Упс... Щось пішло не так...',
         'error',
      )
   }
   //Maybe some function threw string? (but actually it shouldn't -_-)
   else if (typeof error === 'string') {
      console.log('handleFetchError:', 4)
      showNotice(error, 'Помилка', 'error')
   } else {
      console.log('handleFetchError:', 5)
      showNotice(
         'Відбулась невідома помилка.\nСпробуйте ще раз або напишіть нам.',
         'Опана! Схоже, що я поламався :(  ',
         'error',
      )
   }
   console.error(error.stack || error)
}*/

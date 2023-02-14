
  export const numbersPage = (users, USERS_PERPAGE) => {
    const quantityPages = Math.ceil(users.length / USERS_PERPAGE);
    const arrayPages= []
    for(let i = 1 ; i <= quantityPages; i++){
      arrayPages.push(i);
    }
    return arrayPages

}
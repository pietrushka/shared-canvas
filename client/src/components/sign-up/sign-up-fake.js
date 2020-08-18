export default async function fakeRegister({username, email, password}) {
  console.log(`info from fake server ${username, email, password}`)
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if(username === 'yes') {
        resolve()
      } else {
        reject()
      }
    }, 1000)
  })
}
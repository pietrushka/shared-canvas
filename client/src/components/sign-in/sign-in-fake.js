export default async function fakeLogin({username, password}) {
  console.log(`username: ${username} \npassword: ${password}` )
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
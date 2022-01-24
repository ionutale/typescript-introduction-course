import axios from "axios";

interface iUser {
  name: string,
  age: Number,
  company: string
}

async function getUser() {
  try {
    let user: iUser;
    let res = await axios.get('./src/2-data-from-service/user.json')
    user = res.data

    console.log("the user is: ", user)
  } catch (error) {
    console.log(error)
  }
}

(async () => {
  await getUser()
})

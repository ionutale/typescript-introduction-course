import axios from "axios";

const dataUrl = {
  companies: 'https://raw.githubusercontent.com/ionutale/typescript-introduction-course/main/src/2-data-from-service/source-data/companies.json',
  user: 'https://raw.githubusercontent.com/ionutale/typescript-introduction-course/main/src/2-data-from-service/source-data/user.json',
}
interface iUser {
  name: string,
  age: Number,
  company: string
}

const getUser = async () => {
  try {
    let user: iUser;
    let res = await axios.get(dataUrl.companies)
    user = res.data

    console.log("Data is: ", user)
  } catch (error: any) {
    console.log(error.message)
  }
}

getUser()

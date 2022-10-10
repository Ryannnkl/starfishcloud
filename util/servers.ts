import axios from 'axios';

export const checkServers = async () => {
  try {
    console.log('testando')
    axios({
      method: "get",
      url: "https://api.github.com/users/Ryannnkl",
    }).then(res => {
      console.log('requisitou');
      console.log(res.status);
    }).catch(err => {
      console.log('erou')
      console.warn('erro', err)
    })
  } catch(err) {
    console.log('eita')
  }
  return[true];
}
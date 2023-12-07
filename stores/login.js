import { defineStore } from "pinia";

export const useLoginStore = defineStore("login", ()=> {
  const loggedIn = ref(false)
  const id = ref('')
  const name = ref('')
  const image = ref('')
  const dashLogin = useCookie('dashLogin')

  if(dashLogin){
    loggedIn.value = true
    // id.value = dashLogin.value.email
    id.value = 'Mouse3153'
    name.value = '黃鼠鼠'
    image.value = 'https://s3-alpha-sig.figma.com/img/cfbf/8e85/c101d9ee509ebd1615efb93f1332b8d2?Expires=1701648000&Signature=BS6nVO7d6q6c03Ihi0h2zyaSAbTnNJMWK1y2Q5axpUmNrJO4d~p0eSFMcSm7snivW2lwcCmBPBQIqDLDK1BZeZ7awwmLanq78qjyMG~VzKoF11Wq8TcWPx~8yudJli6heuM8ShKKLTA-QB1BoH0aJEwofJSuq4LRKDSJXGa-BXQEZ5JnJEuta9sLrU20wjARSMjC8JJxeLhnfyrTs1pA9zwPVjSaTIgsEJ~W7NGB1Ovu9l3K9QiVui3qjDRq-6KA14usvOhMD02Z-XiN9QkKBnOih9gZWE5Q7XWxahlJEu2GbMv6MjczvbdZxaqBOvfocahyG-Fsd5zoB~-gao2org__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  }

  const logout = () => {
    dashLogin.value = {}
    loggedIn.value = false
    id.value =''
    name.value = ''
    image.value =''
  }

  return {loggedIn, id, name, image, logout}
});

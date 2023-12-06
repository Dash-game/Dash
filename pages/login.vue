<script setup>
  const router = useRouter()
  const loginStore = useLoginStore()

  let forgetPassword = ref(false)

  onMounted(()=>{
    forgetPassword.value = false
  })

  const submit = value => {
    console.log('submit', value);
    loginStore.loggedIn = true
    router.back()
  };
  const sendPassword = value => {
    console.log('sendPassword', value);
    router.back()
  };


</script>

<template>
  <div class="xl:h-[100vh] bg-[url('~/public/images/login_bg.png')] bg-cover bg-center">
    <div class="container xl:pt-32 xl:h-full flex justify-center items-center ">
      <div class="w-full grid xl:grid-cols-2 items-center">
        <div class="grid md:grid-cols-6 border-b xl:border-r xl:border-b-0 border-light">
          <div class="md:col-start-2 md:col-span-4 py-16 xl:py-5" :class="{'hidden':forgetPassword}">
            <h1 class="text-center text-2xl xl:text-3xl mb-16">登入Dash徜徉遊戲世界</h1>
            <VeeForm @submit="submit">
              <div class="mb-10 relative">
                <VeeField name="email" type="email" class="w-full h-16 bg-transparent text-2xl font-medium border border-light rounded-xl focus:border-light focus:ring-light" placeholder="Email" rules="required|email" />
                <VeeErrorMessage name="email" class="text-sm text-labeldark mt-1 absolute top-full left-1" />
              </div>
              <div class="mb-16 relative">
                <VeeField name="password" type="password" class="w-full h-16 bg-transparent text-2xl font-medium border border-light rounded-xl focus:border-light focus:ring-light" placeholder="Password" rules="required|min:8|uppercase" />
                <VeeErrorMessage name="password" class="text-sm text-labeldark mt-1 absolute top-full left-1" />
              </div>
              <button type="submit" class="w-full h-16 rounded-xl text-2xl bg-secondary text-primary hover:text-white">登入</button>
              <div class=" text-center mt-4">
                <a href="#" class=" text-darkgray hover:text-white text-[18px]" @click="forgetPassword = true">忘記密碼</a>
              </div>
            </VeeForm>


          </div>
          <div class="md:col-start-2 md:col-span-4 py-16 xl:py-5" :class="{'hidden':!forgetPassword}">
            <h1 class="text-center text-2xl xl:text-[28px] mb-16">忘記密碼</h1>
            <VeeForm  @submit="sendPassword">
              <div class="mb-10 relative">
                <VeeField name="email" type="email" rules="required|email" class="w-full h-16 bg-transparent text-2xl font-medium border border-light rounded-xl focus:border-light focus:ring-light placeholder:text-center autofill" placeholder="請輸入您的註冊 Email" />
                <VeeErrorMessage name="email" class="text-sm text-labeldark mt-1 absolute top-full left-1" />
              </div>
              <button class="w-full h-16 rounded-xl text-2xl border border-secondary text-secondary hover:bg-secondary hover:text-primary">寄送新密碼</button>
            </VeeForm>
            <div class=" text-center mt-4">
              <a href="#" class=" text-darkgray hover:text-white" @click="forgetPassword = false">返回登入</a>
            </div>
          </div>
        </div>
        <div class="grid md:grid-cols-6">
          <div class="md:col-start-2 md:col-span-4 py-16 xl:py-5">
            <button class="w-full h-16 rounded-xl flex items-center justify-center bg-light text-primary text-2xl mb-10">
              <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-7">
                <Icon name="flat-color-icons:google" class="text-[28px]" />
              </div>
              <span>
                以 Google 帳號登入
              </span>
            </button>
            <button class="w-full h-16 rounded-xl flex items-center justify-center bg-light text-primary text-2xl">
              <div class="w-10 h-10 rounded-xl bg-[#06C755] flex items-center justify-center mr-7">
                <Icon name="ri:line-fill" class="text-[32px] text-white" />
              </div>
              <span>
                以 Line 帳號登入
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
    
</template>
<style scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
  -webkit-text-fill-color: white !important;
  transition: background-color 5000s ease-in-out 0s;
}


</style>
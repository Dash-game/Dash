export default function() {
  const cartStore = useCartStore()

  // const cartList = ref([])
  const getItem = () => {
    if(process.client){
      if(!localStorage.getItem("dash")){
        localStorage.setItem("dash",`{"list":[]}`)
      } else {
        cartStore.cart = JSON.parse(localStorage.getItem("dash"))?.list
      }
    }
  }
  const setItem = (add,id)=>{
    if(process.client){
      if(add){
        if(cartStore.cart.length==0){
          localStorage.setItem("dash", `{"list":["${id}"]}`)
          cartStore.cart = JSON.parse(localStorage.getItem("dash")).list
        }else if(cartStore.cart.findIndex((item)=>item==id)==-1){
          cartStore.cart.push(`${id}`)
          localStorage.setItem("dash",`{"list":${JSON.stringify(cartStore.cart)}}`)
        }
      } 
      else {
        const index = cartStore.cart.findIndex((item)=>item==id)
        if(index!==-1){
          cartStore.cart.splice(index,1)
          localStorage.setItem("dash",`{"list":${JSON.stringify(cartStore.cart)}}`)
        }
      }
    }
  }
  getItem()

  return {
    // cartList,
    setItem
  };


}


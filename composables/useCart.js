export default function() {
  const cartList = ref([])
  const getItem = () => {
    if(process.client){
      if(!localStorage.getItem("dash")){
        localStorage.setItem("dash",`{"list":[]}`)
      } else {
        cartList.value = JSON.parse(localStorage.getItem("dash"))?.list
      }
    }
  }
  const setItem = (add,id)=>{
    if(process.client){
      if(add){
        if(cartList.value.length==0){
          localStorage.setItem("dash", `{"list":["${id}"]}`)
          cartList.value = JSON.parse(localStorage.getItem("dash")).list
        }else if(cartList.value.findIndex((item)=>item==id)==-1){
          cartList.value.push(`${id}`)
          localStorage.setItem("dash",`{"list":${JSON.stringify(cartList.value)}}`)
        }
      } 
      else {
        const index = cartList.value.findIndex((item)=>item==id)
        if(index!==-1){
          cartList.value.splice(index,1)
          localStorage.setItem("dash",`{"list":${JSON.stringify(cartList.value)}}`)
        }
      }
    }
  }
  getItem()

  return {
    cartList,
    setItem
  };


}


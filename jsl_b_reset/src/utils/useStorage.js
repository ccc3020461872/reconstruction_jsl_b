export default function(key,value,isDelete=false){
  if(key){
    if(isDelete){
        localStorage.removeItem(key)
    }else if(value){
        localStorage.setItem(key,JSON.stringify(value))
    }else {
       return JSON.parse(localStorage.getItem(key))
    }
  }else {
      throw new Error('必须传入key')
  }
}
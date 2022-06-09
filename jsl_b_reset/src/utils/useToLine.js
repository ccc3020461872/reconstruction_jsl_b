function toLine(name) {
    return name.replace(/([A-Z])/g,"_$1").toLowerCase();
  }
 function formatObj(obj){
     const newObj = {}
     for(let k in obj){
        newObj[toLine(k)] = obj[k]
     }
     return newObj
 }
 export default formatObj

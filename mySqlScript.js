

  var createData = (dataRow,data) =>{
    let keys = Object.keys(data)
    let keyStr = ''
    let valueStr = ''
    for(let key of keys){
      keyStr += key + ', '
      if(typeof(data[key])==='string'){
        valueStr += `'${data[key]}', `
      }else if(typeof(data[key])==='object'){
        valueStr += `'${JSON.stringify(data[key])}', `
      }else{
        valueStr += `${data[key]}, `
      }
    }
    keyStr = keyStr.slice(0, -2)
    valueStr = valueStr.slice(0, -2)
    let result = `insert into ${dataRow} (${keyStr}) values(${valueStr})`
    
    return result
    
  }


export {createData}



  var createData = (dataSheet,data) =>{
    let keys = Object.keys(data)
    let keyStr = ''
    let valueStr = ''
    for(let key of keys){
      keyStr += key + ', '
      if(typeof(data[key])==='string'){
        valueStr = `'${data[key]}', `
      }else if(typeof(data[key])==='object'){
        valueStr = `'${JSON.stringify(data[key])}', `
      }else{
        valueStr = `${data[key]}, `
      }
    }
    keyStr = keyStr.slice(0, -2)
    valueStr = valueStr.slice(0, -2)
    let result = `insert into ${dataSheet} (${keyStr}) values(${valueStr})`
    
    return result
  }

  var getData = (dataSheet,query) =>{
    let key = Object.keys(query)
    let result = 'select * from '
    let queryStr = ''
    if(query[key] == undefined){
      result = result + dataSheet
    } else{
      if(typeof(query[key])==='string'){
        queryStr = `'${query[key]}'`
      }
      result = result + `${dataSheet} where ${key} = ${queryStr}`
    }
    return result
  }


export {createData,getData}

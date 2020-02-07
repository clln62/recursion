// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // console.log(JSON.stringify(obj))
  if (typeof obj === 'string') {
    return `"${obj}"`
  }
  if (typeof obj !== 'object' || obj === null) {
    return `${obj}`
  }
  if (Array.isArray(obj) && obj.length <= 0) {
    return `[${obj}]`
  }
  if (Array.isArray(obj)) {
    let output = [];
    for (let i = 0; i < obj.length; i++) {
      if (typeof obj[i] === 'number') {
        output.push (obj[i])
      } else {
        output.push(stringifyJSON(obj[i]))
      }
    }
    return `[${output}]`
  }
  if (typeof obj === 'object' && !Array.isArray(obj)) {
    let output = '';
    if (Object.keys(obj).length <= 0) {
      return `{}`
    }
    // if (Object.keys(obj).length > 0) {
    //   object(obj)
    // }
    // function object (obj) {
      // let output = '{'
      for (let key in obj) {
        str += `${stringifyJSON(key)}: ,`
        // if (Object.keys(obj).length === 1) {
        //   output = output.concat(stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + '}')
        //   return output;
        // } else {
        //   Object.keys(obj).forEach(function(key) { 
        //     output = output.concat(stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',')
        //   })
        }
        return `{${str.slice(0,-1)}}`
        // output[key] = stringifyJSON(key)
        // output[key] = obj[key]
        // console.log(output)
        // console.log(Object.values(obj))
        // console.log(output[stringifyJSON(key)] = stringifyJSON(key))
      }
      // output = output.slice(0, output.length-1)
      // console.log(output + '}')
      // return output + '}';
    // }
    // return `{${output}}`
  }

  // return JSON.stringify(obj)

};

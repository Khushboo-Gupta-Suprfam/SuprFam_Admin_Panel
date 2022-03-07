

export function copyAssign(params){
    return JSON.parse(JSON.stringify(params))
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
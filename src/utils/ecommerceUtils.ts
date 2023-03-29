export const locateBrValue = (value: number) => {
    let locateValue = String(value).replace('.', ',')
    if(locateValue.split(',').length == 1){
        return locateValue + ',00'
    }
    if(locateValue.split(',')[1].length == 2){
        return locateValue
    }
    if(locateValue.split(',')[1].length == 1){
        return locateValue + '0'
    }

}
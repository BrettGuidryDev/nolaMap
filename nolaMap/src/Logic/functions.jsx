
export const test1 = ()=>{
    let x = 1
    return test2(x)
}

export const test2 = (x)=>{
    return x + 5
}


// fetch('https://www.boredapi.com/api/activity')
// .then(res => res.json())
// .then(res => console.log(res))


export const strGet = async (url) => {
    // console.log("strGet runs")
    let response = await fetch(url);
    let locations  = await response.json();
    return processStr(locations);
}

const processStr = async (locations) => {
    //console.log(locations)
    let count = 0;
    const residential = 'Short Term Rental Residential Owner'
    const commercial = 'Short Term Rental Commercial Owner'
    let strData = []
    for (const listing in locations){
        if (locations[listing].location){
            let {address, type} = locations[listing]
            let latitude = parseFloat(locations[listing].location.latitude)
            let longitude = parseFloat(locations[listing].location.longitude)
            //console.log('LOCATIONS in loop.jsx',lat,long, count)
            if (type !== residential){
                strData[count] = {'address':address, 'type':type, 'x':latitude, 'y':longitude}
            }
        }    
        count++
    }
    //console.log('LOCATIONS from functions.jsx',locations[797].location.longitude)
    // console.log('Long Lat TEST',testLat, testLong)
    //console.log('STRDATA from functions.jsx',strData[0]) 
    return strData
}


export const formatDataforPresentation = (listingData) => {
    // for (const listing in listingData){
    //     let [address, type, x, y] = Object.values(listingData[listing])
    //     strDataArray.push(<div>{address} {type} {x} {y}</div>)
    //   }
    //   console.log('displayStrData:',address, type, x, y)
    //   console.log('strDataArray',strDataArray)
    console.log('listingData From Functions js',listingData)
}

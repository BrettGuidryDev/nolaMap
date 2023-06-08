export const strGet = async (url) => {
    // console.log("strGet runs")
    let response = await fetch(url);
    let locations  = await response.json();
    return processStr(locations);
}

/*
 main processing of STR api data
 creates address/location variables
 I want to break this down by str type for less clutter and more display options, 
 but for now this just fills the strData array with all items
*/

const processStr = async (locations) => {
    let count = 0;
    let strData = []

    for (const listing in locations){
        if (locations[listing].location){
            let {address, type} = locations[listing]
            let latitude = parseFloat(locations[listing].location.latitude)
            let longitude = parseFloat(locations[listing].location.longitude)
            
            strData[count] = {'address':address, 'type':type, 'x':longitude, 'y':latitude }

            //commented out because I want to only fill the array once
            // using the code below may require multiple api calls to change the display for each type of STR
            // if (type === residential){
            //     strData[count] = {'address':address, 'type':type, 'x':longitude, 'y':latitude }
            // } else if (type === commercial){
            //     strData[count] = {'address':address, 'type':type, 'x':longitude, 'y':latitude }
            // } else {
            //     // show all listings
            //     strData[count] = {'address':address, 'type':type, 'x':longitude, 'y':latitude }
            // }
        }    
        count++
    }
    //console.log('LOCATIONS from functions.jsx',locations[797].location.longitude)
    //console.log('Long Lat TEST',testLat, testLong)
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

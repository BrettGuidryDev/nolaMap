import { useEffect, useState, useContext } from 'react'
import reactLogo from '../assets/react.svg'
import '../App.css'

import {test1, strGet} from '../Logic/functions'
import Listing from './Listing'
import StrMap from './Map'
import { StrDataContext } from '../Contexts/StrDataContext'
// import * as funks from './functions.js'





function App() {
  const [count, setCount] = useState(0)
  const [strData, setStrData] = useState({
    url: 'https://data.nola.gov/resource/rbhq-zbz9.json',
    strListings:[],
    displayStrData:{}
  })
  
  //props test data to make sure its displaying to screen
  const testData = [<div key={1}>test1</div>, <div key={2}>test2</div>, <div key={3}>test3</div>] 
  const testContextData = testData //just for testing useContext implementation. remove later
  
  const handleClick = async (url)=>{
    const freshStrData = await strGet(url)
    setStrData((prev)=> ({...prev,strListings:freshStrData}))
    console.log('freshStrData in APPjsx',freshStrData[0]) // returns object data
  }

  useEffect(() => {
    // let refresh = true
    // if(refresh = true){
    // }
    console.count('useEffect count')
    //console.log('strDataDOTlistings in useEffect',strData.strListings)
    //return () => refresh = false
  },[strData.strListings])

  

  

  //let dataDisplay = 'TMPtest' //!Object.keys(displayStrData).length ? placeholder : Object.values(displayStrData)
  //console.log(displayStrData, Object.keys(displayStrData), Object.values(displayStrData))
  
  // const formatDataforPresentation = (strData)=>{
  //   if (!Object.values(strData)) return ''
  //   let strDataArray = []
  //   console.log('strData', strData)
  //   for (const listing in strData){
  //     //console.log(strData[listing])
  //     let [address, type, x, y] = Object.values(strData[listing])

  //     //strDataArray.push(<div>{address} {type} {x} {y}</div>)
  //     //setDisplayStrData(strDataArray)
  //   }
  //   //console.log('strDataArray',strDataArray)
  //   //console.log('displayStrData:',displayStrData)
  // }

  // fetch('https://www.boredapi.com/api/activity')
  // .then(res => res.json())
  // .then(res => console.log(res))



  return (

    <div className="App">
        {/* <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div> */}
        <h1>STR listsing in New Orleans</h1>
        <div className="card">
          <button onClick={() => handleClick(strData.url)}>
            Get STR Data
          </button>
          <span> count is {strData.strListings.length} </span>
          <div>
          <div>
            <button onClick={() => formatDataforPresentation(strData)}>
            test
            </button>
          </div>
            {/* <StrDataContext.Provider value={{testContextData}}>
              <Listing data={strData.strListings} test={testData} />
            </StrDataContext.Provider>   */}
            <StrMap mapData={strData.strListings} /> 
          </div>
        </div>
      </div>
  )
}

export default App

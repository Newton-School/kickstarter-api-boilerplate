import React from 'react'
import '../styles/App.css';
import Data from './Data.json'
const App = () => {

  fetch("https://vnsh.notion.site/Kickstarted-JSON-DATA-3cbe961dc2c649d2abf925bea050cd3a").then((result)=>{
    console.log(result);
  })

  return (
    <div id="main">
      
      <div className='table-wrapper'>
      <center>
      <table className='sticky-header sticky-column'>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Percentage Funded</th>
          <th>Amount Pledged</th>
        </tr>

      </thead>
        
      {
        Data.map(record =>{
          return(
            <tbody id='table-body'>
            <tr>
              <td>
                  {record['s.no']}
              </td>
              <td>
                  {record['percentage.funded']}
              </td>
              <td>
                  {record['amt.pledged']}
              </td>
            </tr>
            </tbody>
          )

        })
      }
      </table>
      </center>  
      </div>
    
      
    </div>
  )
}


export default App;

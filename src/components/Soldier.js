import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Soldier.css"

export default function Soldier() {

    const [data, setdata] = useState({})

    useEffect(() => {
      axios.get("http://127.0.0.1:5000/api/v1/soldier")
      .then(res=> {setdata(res.data.soldier[0])})
      .catch(err=> console.log(err))
      
    }, [])
    
    console.log("data===>",(data))
  return (
  
    <div className="soldier-container">
        
        <div className='soldier-images'>
        <img alt='' src='soldier__pic.png' style={{width: '110%', margin: '15px 30px auto auto'}}/>
        <img alt='' src='soldier__dogtags.png' style={{position: 'absolute', bottom: '140px'}}/>
        </div>

        <div className='soldier-name'>
            <div>
                <img alt='' src="home__level.png"/>
            </div>
            <div>
                <div style={{fontSize:"30px"}}>{data.name}</div>
                <div>69840/110,000 - <span>Estimated rank uo in 1h</span></div>
            </div>
        
        </div>
    
        <div className='soldier-assets'>
            {data.assets ? (
              data.assets.map((ele) => (
                <div key={ele._id} className='soldier-assets-item'>
                    <div style={{margin : 'auto 0px'}}>{Object.keys(ele)[1]}:</div>
                    <div>
                        <div style={{textAlign: 'right'}}>{Object.values(ele)[1]}</div>
                        <progress style={{width: '100px',  }} value={Object.values(ele)[1]} max="100"> </progress>
                    </div>
                </div>
              ))
            ) : (
              <div>No assets available</div>
            )}
        </div>

        <div className='soldier-stats'>
            <div >
                <div>WINS</div> <div>{data.wins}</div>
            </div>
            <div>
                <div>SCORE</div> <div>{data.score}</div>
            </div>
            <div>
                <div>KILLS</div> <div>{data.kills}</div>
            </div>
        </div>

        <div className='soldier-top'>
            <div className='top-vehical'>
             <img alt='' src='soldier__top-stats (3).png' width='85%' height='70%'/>
            </div>

            <div className='top-primary'>
             <img alt='' src='soldier__top-stats (2).png' width='85%' height='70%'/>
            
            </div>

            <div className='top-class'>
             <img alt='' src='soldier__top-stats (1).png' width='85%' height='70%'/>
             
            </div >

            <div className='top-sidearm'>
             <img alt='' src='soldier__top-stats.png' width='85%' height='70%'/>
            
            </div>
        </div>

</div>
    
  )
}

import React,{ Component } from 'react'
import img1 from '../../assets/p35.jpg'
import img2 from '../../assets/p34.jpg'
import img3 from '../../assets/p32.jpg'
import { width } from 'window-size';



 
class Cards extends Component {
    render(){
        return (
            <div style={{ backgroundColor: 'rgb(246,34,78)' }}>
                <div style={{ backgroundColor: 'rgb(24,34,78)' }}>
                <h1 style={{ textAlign:'center',fontFamily:'italic',color:'white' }}>
                        EVENTS</h1>
                </div>
                <br />
                    <br></br><br />
                    <br></br>
            <div class="card-deck">
            <div class="card" style={{backgroundColor:'black'}}>
             <img class="card-img-top" src={img1} style={{ height:'40rem' }} alt="Card image cap" />
              <div class="card-body">
              <h1 style={{textAlign:'center',fontFamily:'italic',color:'white'}}>INFINITE</h1>
     </div>
         </div>
          <div class="card" style={{backgroundColor:'black'}}>
    <img class="card-img-top" src={img2} style={{ height:'40rem' }} alt="Card image cap" />
    <div class="card-body">
      <h1  style={{textAlign:'center',fontFamily:'italic',color:'white'}}>MATHS PIRATES</h1>
    </div>
    </div>
      <div class="card" style={{backgroundColor:'black'}}>
    <img class="card-img-top" src={img3} style={{ height:'40rem' }} alt="Card image cap" />
    <div class="card-body">
      <h1  style={{textAlign:'center',fontFamily:'italic',color:'white'}}>SUDUKODOS</h1>
    </div>
       </div>
    </div>
    <br />
    <br></br>
    <br></br>
    <div style={{backgroundColor: 'grey'}}>
        <h1 style={{ textAlign:'center',color:'white',fontFamily:'italic' }}>NEWS</h1>
    </div>
    </div>

        );
    }
}

export default Cards 
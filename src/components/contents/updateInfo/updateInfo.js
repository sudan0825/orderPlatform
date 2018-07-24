import React from 'react';
import myStyle from './updateInfo.css'




const UpdateInfo=(props)=>(
    <div className={myStyle.UpdateInfo}>
    <div> {/*Update informaton*/}
     <div className={myStyle.leftImg}>
     
      <div>Drop Product Picture Here</div>
     
    </div>
     <div className={myStyle.rightInfo}>
    
     <div> <label>Name</label> <input /></div>
       <div><label>Discription</label> <textArea></textArea> </div>
      <div> <label>price </label><input /> </div>
     <button>Submit</button>
    </div>
      </div> 
    
   </div>)
    
export default UpdateInfo;
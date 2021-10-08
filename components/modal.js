import React ,{useState} from 'react'

import './modal.css'


function Modal(props){

    const[open,setOpen] = useState(false)
    

    
    return (
        
        <div className='style'
        open={open}
        onClose={()=>setOpen(false)}
        >
            
            <form  onClick={()=>setOpen(true)}> 
                <button>Sign Up</button>
            </form>
        </div>

       



        
    )
}

export default Modal
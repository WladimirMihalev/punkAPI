import React from 'react';
import "./Modal.css"
import  './Validation/RegisterForm.js'
import RegisterForm from './Validation/RegisterForm.js';

const Modal = ({active, setActive}) => {
    return (
        <div className={active? 'modal active' : 'modal'} onClick={()=>setActive(false)}>
         <div className='modal_content' onClick={e => e.stopPropagation()}>
              <RegisterForm/>
         </div>
        </div>
    );
};

export default Modal;

import {StyledModal} from './styles/Container.styled'
import questions from './questions/questions';
import { useState } from 'react';
const Modal = ({closeModal}) => {
    const [marks,setMarks]=useState(0)
    const [showmarks,setShowMarks]=useState(false)
    // const seeMarks = () =>{
       
    // }
    return (<StyledModal>
        <div>

            <span onClick={closeModal}>&times;</span>
            {
                questions.map((Question)=>{
                    const{id,question,answers} = Question
                    return <div key={id}>
                         <h3>{question}</h3>
                         {
                            answers.map((choice,index)=>{
                                const {answer,marks} = choice
                                return <li key={index}>
                                 <input type="radio" name="group1" onChange={()=>setMarks(marks)} value={marks} />   
                                 <h4>
                                   {answer}
                                </h4>
                                
                               </li>
                            })
                         }
                         <button onClick={()=>setShowMarks(true)}>Submit</button>
                         {showmarks &&<h3>marks :{marks}</h3>}
                    </div>

                })
            }
            
        </div>
    </StyledModal>
    );
}

export default Modal;
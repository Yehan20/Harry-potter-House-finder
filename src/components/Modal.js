import {StyledModal} from './styles/Container.styled'
import Questions from './questions/questions';
import { useEffect, useState } from 'react';
const Modal = ({closeModal}) => {
    const [marks,setMarks]=useState(0)
    const [showmarks,setShowMarks]=useState(false)
    const [currentQuestion,setCurrentQuestion]=useState(1)
    const [questions,setQuestions]=useState(Questions);
    const [scores,setScores]=useState([]);
    // const seeMarks = () =>{
       
    // }
    useEffect(()=>{
       setQuestions(Questions.filter(question=>question.id===currentQuestion))
    },[currentQuestion])
    
    const handleClick =()=>{
        setScores([...scores,marks])
        setCurrentQuestion(currentQuestion + 1)
    }

    return (<StyledModal>
        <div>

            <span onClick={closeModal}>&times;</span>
            {
                questions.map((Question)=>{
                    const{id,question,answers} = Question
                    return <ul key={id}>
                         <h3>{question}</h3>
                         {
                            answers.map((choice,index)=>{
                                const {answer,marks} = choice
                                return <li key={index}>
                                 <input type="radio" id={answer} name="group1" onChange={()=>setMarks(marks)} value={marks} />   
                                 <label htmlFor={answer}>
                                   {answer}
                                </label>
                                
                               </li>
                            })
                         }
                         <button onClick={handleClick}>Submit</button>
                        
                    </ul>

                })
            }
            
        </div>
    </StyledModal>
    );
}

export default Modal;
import { StyledModal } from './styles/Container.styled'
import { StyledHouse } from './styles/Container.styled';
import Questions from './questions/questions';
import { useEffect, useState } from 'react';
import {Houses} from './questions/houses';
const Modal = ({ closeModal }) => {
    const [marks, setMarks] = useState(0)
    const [show, setShow] = useState(true)
    const [currentQuestion, setCurrentQuestion] = useState(1)
    const [questions, setQuestions] = useState(Questions);
    const [scores, setScores] = useState([]);
    const [finalScore, setFinalScore] = useState('')


    const getFinalMarks = () => {
        let final = scores.reduce((inititalVal, nextVal) => {
            return inititalVal += nextVal
        }, 0)
        console.log('final marks is =',final);
        setFinalScore(final)
    }

    useEffect(() => {
        setQuestions(Questions.filter(question => question.id === currentQuestion))
        getFinalMarks()
   
    }, [currentQuestion])

    const handleClick = () => {
        setScores([...scores, marks])
        setCurrentQuestion(currentQuestion + 1)
        setShow(true)
    }

    console.log('render');

    return (<StyledModal>
        <div>

            <span onClick={closeModal}>&times;</span>
            {
                questions.map((Question) => {
                    const { id, question, answers } = Question

                    return <ul key={id}>
                        <h3>{question}</h3>
                        {
                            answers.map((choice, index) => {
                                const { answer, marks } = choice
                                return <li key={index}>
                                    <input type="radio" id={answer} name="group1" onChange={() => {
                                        setShow(false)
                                        setMarks(marks)
                                    }} value={marks} />
                                    <label htmlFor={answer}>
                                        {answer}
                                    </label>

                                </li>
                            })
                        }
                        <button disabled={show} onClick={handleClick}>Next</button>

                    </ul>

                })

            }

            
           {currentQuestion===(Questions.length + 1) ?<Result finalScore={finalScore}/>:''}

        </div>
    </StyledModal>
    );
}

const Result = ({finalScore}) => {
   const [house,setHouse]=useState()
    console.log(Houses);
    const yourHouse =Houses.find((house)=>{
        if(finalScore>house.min && finalScore<=house.max){
            return house;
            
        }
    })
   
    useEffect(()=>{
        setHouse(yourHouse)
    },[])

    console.log('your house',yourHouse);


    return (
       <>
       { house &&
            <StyledHouse bg={house.color} >
            <h3>Your House is</h3>
         
             <p className="house">
                 {house.name}
             </p>
             <img src={house.path} alt={house.name} />
       </StyledHouse>
       }
       </>
    
    )
}

export default Modal;
import { StyledModal } from './styles/Container.styled'
import { StyledHouse } from './styles/Container.styled';
import Questions from './questions/questions';
import { useCallback, useEffect, useState } from 'react';
import { Houses } from './questions/houses';
const Modal = ({ closeModal,attempts }) => {

    const [marks, setMarks] = useState(0)
    const [show, setShow] = useState(true)
    const [currentQuestion, setCurrentQuestion] = useState(1)
    const [questions, setQuestions] = useState(Questions);
    const [scores, setScores] = useState([]); // score for each question
    const [finalScore, setFinalScore] = useState('') // total score arry


    const getFinalMarks = useCallback(() => {
        let final = scores.reduce((inititalVal, nextVal) => {
            return inititalVal += nextVal
        }, 0)

        setFinalScore(final)
    }, [scores])



    useEffect(() => {

        setQuestions(Questions.filter(question => question.id === currentQuestion))
        getFinalMarks()

    }, [currentQuestion, getFinalMarks])


    const handleClick = () => {

        setScores([...scores, marks])
        setCurrentQuestion(currentQuestion + 1)
        setShow(true)
    }


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
            {currentQuestion === (Questions.length + 1) ? <Result finalScore={finalScore}  attempts={attempts}/> : ''}
        </div>
    </StyledModal>
    );
}

const Result = ({ finalScore,attempts }) => {
    const [house, setHouse] = useState()
    const yourHouse = Houses.find((house) => {

        if (finalScore >= house.min && finalScore <= house.max) {// this is true therefore this find methods finish executes
            window.localStorage.setItem('house', JSON.stringify({ color: house.color[0], name: house.name, info: house.description, src: house.path, status: 'House Sorted', finished: true,attempts:++attempts }))
            return house;

        }
        return false;
    })

    useEffect(() => {
        setHouse(yourHouse)

    }, [house, yourHouse])

    return (
        <>
            {house &&
                <StyledHouse bg={house.color} >
                    <h2>Your House is</h2>
                    <img src={house.path} alt={house.name} />
                    <h3 className="house">
                        {house.name}
                    </h3>
                    <p>
                        {house.description}
                    </p>
                </StyledHouse>
            }
        </>

    )
}

export default Modal;
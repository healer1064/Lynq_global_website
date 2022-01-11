import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './question'
import { Row, Collapsible,CollapsibleItem, Icon } from 'react-materialize';
import './accordianGroup.css';


const AccordianGroup = () => {
    const [questions, setQuestions] = useState(data)
  
    return (
        <div className="AccordianGroup">
            <div className="Container">
                <div className="AccordianGroup_Wrapper">
                    <section className='info'>
                        {questions.map((question) => (
                            <SingleQuestion key={question.id} {...question} />
                        ))}
                    </section>
                </div>
            </div>
        </div>
    );
}

export default AccordianGroup;
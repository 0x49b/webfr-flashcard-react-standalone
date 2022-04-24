import React from 'react'
import QuestionnaireShowDialog from './QuestionnaireShowDialog'
import QuestionnaireEditDialog from './QuestionnaireEditDialog'
import {Button, Row} from 'reactstrap'

const QuestionnaireTableElement = ({ questionnaire }) => (
    <tr key={ questionnaire.id } >
        <td>{ questionnaire.id }</td>
        <td>{ questionnaire.title }</td>
        <td>{ questionnaire.description }</td>
        <td>
        
            <QuestionnaireShowDialog questionnaire={ questionnaire }/>
        </td>
        <td>
            <QuestionnaireEditDialog questionnaire={questionnaire}/>
         </td>
         <td>
            <Button color='danger'>Delete</Button>
        
        </td>
    </tr>
)

export default QuestionnaireTableElement
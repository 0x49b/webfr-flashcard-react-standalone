import { Component } from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap';

class QuestionnaireCreateDialog extends Component{

    constructor(props){
        super(props);
        this.state = { title: "", description: "", showModal: false };
    }

    abort = () => this.setState({showModal: false, title: "", description: ""})
    close = () => this.setState({ showModal: false });
    open = () => this.setState({ showModal: true });

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render(){
        return (
            <div>
            <Button color="success" onClick={this.open} className="float-right">Add Questionnaire</Button>
            <Modal isOpen={ this.state.showModal } toggle={ this.abort } size="lg"  autoFocus={ false }>
              <ModalHeader toggle={ this.abort } >
                Show Questionnaire
              </ModalHeader>
              <ModalBody>
                 <Form>
                   <FormGroup row>
                     <Label md={ 2 } for="formTitle">
                       Title
                     </Label>
                     <Col md={ 10 }>
                       <Input name="title" type="text" id="formTitle" value={ this.state.title } onChange={this.handleChange}  />
                     </Col>
                   </FormGroup>
    
                   <FormGroup row>
                     <Label md={ 2 } for="formDescription">
                       Description
                     </Label>
                     <Col md={ 10 }>
                       <Input type="text" name="description" id="formDescription" value={ this.state.description } onChange={this.handleChange} />
                     </Col>
                   </FormGroup>
    
                   <FormGroup>
                     <Col style={{ padding: '.2rem' }}>
                       <Button color="secondary" onClick={ this.close }>save</Button>
                     </Col>
                   </FormGroup>
                 </Form>
              </ModalBody>
            </Modal>
          </div>
        )
    }
};

export default QuestionnaireCreateDialog;
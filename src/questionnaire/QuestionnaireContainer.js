import _ from 'lodash';
import { Component } from 'react';
import { Col, Row } from 'reactstrap';
import QuestionnaireCreateDialog from './QuestionnaireCreateDialog';
import QuestionnaireTable from './QuestionnaireTable';

const ID = 'id';
const DEFAULT_ID = 0;

class QuestionnaireContainer extends Component {

  constructor(props){
    super(props);
    this.state = { qs: this.props.qs};
  }

  id = qs =>   _.get(_.maxBy(qs, ID), ID, DEFAULT_ID) + 1

  create = questionnaire => this.setState({ qs: _.concat(this.state.qs, { id: this.id(this.state.qs), ...questionnaire }) })
  delete = questionnaire => this.setState({ ws: _.reject(this.state.qs, function(q) { return q.id === questionnaire.id } )})

  render() {
    return <div>
        <Row>
            <Col><h3>Questionnaires</h3></Col>
            <Col><QuestionnaireCreateDialog create={ this.create } /></Col>
        </Row>
        <QuestionnaireTable qs={ this.state.qs } delete={this.delete} />
    </div>
  }

}

QuestionnaireContainer.defaultProps = {
    qs:[
      {'id': 1, 'title': 'Test Title 1', 'description': 'Test Description 1'},
      {'id': 2, 'title': 'Test Title 2', 'description': 'Test Description 2'},
      {'id': 3, 'title': 'Test Title 3', 'description': 'Test Description 3'},
      {'id': 4, 'title': 'Test Title 4', 'description': 'Test Description 4'},
      {'id': 5, 'title': 'Test Title 5', 'description': 'Test Description 5'}
    ]
  }

export default QuestionnaireContainer
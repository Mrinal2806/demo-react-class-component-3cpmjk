import { Form, Col, Button } from 'react-bootstrap';

const MultipleImport = (props) => (
  <Form>
    <Form.Row>
      <Col>
        <span>{props.id}</span>
      </Col>
      <Col>
        <Form.Control
          type="task"
          value={props.task}
          placeholder="enter the task..."
        />
      </Col>
      <Col>
        <Button>Submit</Button>
      </Col>
    </Form.Row>
  </Form>
);

export default MultipleImport;

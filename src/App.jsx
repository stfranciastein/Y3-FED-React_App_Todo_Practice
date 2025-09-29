import {Container, Row, Col} from 'react-bootstrap' //remember that you can import multiple things from the same source in one line.
import TodoList from "./components/TodoList";
import "./assets/app.css";

export default function App() {
  return (
    <Container className='mt-5'>
      <Row>
        <Col>
          <TodoList />
        </Col>
      </Row>
    </Container>
  );
};
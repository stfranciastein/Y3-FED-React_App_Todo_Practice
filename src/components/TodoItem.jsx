import { ListGroupItem, Badge } from "react-bootstrap";

export default function TodoItem({ todo, markAsDone, deleteTodoItem }) { //whenever you create a function back in Todo list, remember you need to access it at the export.
    return (
        <ListGroupItem>
            {todo.done ? (
                <>
                    <span className="done">{todo.text}</span>
                    <span className="float-end">&#128077;</span>
                    <Badge pill bg="danger" className="float-end" onClick={() => deleteTodoItem(todo.id)} style={{ cursor: "pointer" }}>Delete</Badge>
                </>
            ) : (
                <>
                    <span>{todo.text}</span>
                    <Badge pill bg="success" className="float-end" onClick={() => markAsDone(todo.id)} style={{ cursor: "pointer" }}>&#10003;</Badge>
                    <Badge pill bg="danger" className="float-end" onClick={() => deleteTodoItem(todo.id)} style={{ cursor: "pointer" }}>Delete</Badge>
                </>
            )}
        </ListGroupItem>
    );
}
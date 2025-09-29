import { ListGroupItem, Badge } from "react-bootstrap";

export default function TodoItem({ todo, markAsDone, deleteTodoItem }) { //whenever you create a function back in Todo list, remember you need to access it at the export.
    return (
        <ListGroupItem>
            {todo.done ? (
                <>
                    <span className="done">{todo.text}</span>
                    {/* <span className="float-end">&#128077;</span> */}
                    <span className="text-secondary float-end pe-1" onClick={() => deleteTodoItem(todo.id)} style={{ cursor: "pointer" }}>Delete</span>
                </>
            ) : (
                <>
                    <span>{todo.text}</span>
                    <Badge pill bg="success" className="float-end me-1" onClick={() => markAsDone(todo.id)} style={{ cursor: "pointer" }}>&#10003;</Badge>
                    <span className="text-secondary float-end pe-1" onClick={() => deleteTodoItem(todo.id)} style={{ cursor: "pointer" }}>Delete</span>
                </>
            )}
        </ListGroupItem>
    );
}
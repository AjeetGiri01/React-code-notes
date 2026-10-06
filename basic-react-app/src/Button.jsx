function handleClick(event) {
    console.log("Hello!");
    console.log(event);
};

function handleMouseOver() {
    console.log("bye!");
}

function handleDblClick() {
    console.log("You double clicked!");
}

export default function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>this para is for event demo Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate repellat autem fuga atque corporis nesciunt consequuntur! Recusandae praesentium labore fuga eum, eligendi quibusdam omnis nisi!</p>
            <button onDoubleClick={handleDblClick} >Double click me!</button>
        </div>
    );
}
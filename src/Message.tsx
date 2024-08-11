// Use Pascal case to declare a function
function Message(){
    // html tags are JSX JavaScript XML
    const name = "Shah"
    if (name)
    return <h1>"Hello {name}"</h1>;
    else{
        return <h1>"Hello World!"</h1>;
    }
}

export default Message;
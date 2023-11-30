function Button({text}) {
    return <button>{text}</button>;
}

export default function Navbar() {
    return(
        <div className="Navbar">
            <div className="Left">
                <p>logo</p>
            </div>
            <div className="Right">
                <Button text="Characters"/>
                <Button text="Teams"/>
                <Button text="About"/>            
            </div>
        </div>
    )
}
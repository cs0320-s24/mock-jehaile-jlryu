import '../styles/main.css';


interface REPLHistoryProps{
    // TODO: Fill with some shared state tracking all the pushed commands
    history: string[];
    mode: string
}
export function REPLHistory(props : REPLHistoryProps) {
    console.log(props.mode)
    return (
        <div className="repl-history" aria-label={"history box"}>
            {props.history.map((command, index) => (
                <div key={index}>

                    {props.mode === 'verbose' ? <p>Command: {command}</p> : null}
                    <p>Output: {command}</p> {/* Adjust this to show actual output vs. command text */}
                </div>
            ))}
        </div>
    );
}
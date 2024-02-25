import '../styles/main.css';


interface REPLHistoryProps{
    // TODO: Fill with some shared state tracking all the pushed commands
    history: string[];
    mode: string
}
export function REPLHistory(props : REPLHistoryProps) {
    return (
        <div className="repl-history" aria-label={"history box"}>
            {props.history.map((command, index) => (
                <div key={index}>

                    {props.mode === 'verbose' ? <p>Command: {command} Output: {"output"}</p> : null}
                    {props.mode === 'brief' ? <p>Output: {command}</p>: null}
                    {/* Adjust this to show actual output vs. command text */}
                </div>
            ))}
        </div>
    );
}
import '../styles/main.css';

interface REPLHistoryProps{
    history: string[];
    mode: string;
    item: string;
}
export function REPLHistory(props : REPLHistoryProps) {
    return (
        <div className="repl-history" aria-label={"history box"}>
            {props.history.map((command, index) => (
                <div key={index}>

                    {props.mode === 'verbose' ? <p>Command: {command} Output: {"response"}</p> : null}
                    {props.mode === 'brief' ? <p>Output: {"response"}</p>: null}
                </div>
            ))}
        </div>
    );
}
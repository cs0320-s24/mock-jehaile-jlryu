import '../styles/main.css';

interface REPLHistoryProps{
    history: string[];
    mode: string;
}
export function REPLHistory(props : REPLHistoryProps) {
    return (
        <div className="repl-history" aria-label={"history box"}>
            {props.history.map((command) => <p>{command}</p>)}
        </div>
    );
}
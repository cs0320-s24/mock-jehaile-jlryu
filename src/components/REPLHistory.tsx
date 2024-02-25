import '../styles/main.css';


interface REPLHistoryProps{
    // TODO: Fill with some shared state tracking all the pushed commands
    history: string[];
    mode: string
}
export function REPLHistory(props : REPLHistoryProps) {
    console.log(props.mode)
    return (
        // <div className="repl-history" aria-label={"history box"}>
        //     {/* This is where command history will go */}
        //     {/* TODO: To go through all the pushed commands... try the .map() function! */}
        //     {/* call the repl input class and then display the verbose vs brief output */}
        //     {props.history.map((command, index) => (
        //         <div key={index}>
        //             {props.mode === 'verbose' && <p> Command: {command}</p>}
        //             <p>Output:{command}</p>
        //             </div>
        //     ))}
        //     {/* {props.history.map((command, index) => (<p>Command: {command} Output:</p>))} */}
        // </div>
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
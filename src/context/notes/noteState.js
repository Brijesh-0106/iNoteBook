import NoteContext from "./noteContext";
// Context API is commited so use time machine to get the code.

const NoteState = (props) => {
    return (
        // {for javascript {for object} }
        <NoteContext.Provider value={{}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;
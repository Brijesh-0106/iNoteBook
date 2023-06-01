import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const s = {
        name: "Phenomenal",
        favPlayer: "kaneWilliamson"
    }

    const [state, setstate] = useState(s)

    const update = () => {
        setTimeout(() => {
            setstate({
                name: "Champion",
                favPlayer: "Chris Hamsworth"
            })
        }, 2000);
    }

    // diuhweuhfiuhai

    return (
        // {for javascript {for object} }
        <NoteContext.Provider value={{ state: state, update: update }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;
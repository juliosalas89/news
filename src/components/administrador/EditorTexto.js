//Editor de texto externo. API Docs: https://www.npmjs.com/package/jodit-react

import React from 'react';
import { useRef } from 'react';
import JoditEditor from "jodit-react";

const EditorTexto = (props) => {
    const editor = useRef(null)

    return (
        <JoditEditor
            ref={editor}
            value={props.cuerpoInicial}
            tabIndex={1} // tabIndex of textarea
            // onBlur={newContent => props.setCuerpo(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={newContent => props.setCuerpo(newContent)}
        />
    );
};

export default EditorTexto;
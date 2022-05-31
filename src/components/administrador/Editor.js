//Editor de texto externo. API Docs: https://www.npmjs.com/package/jodit-react

import React from 'react';
import { useRef } from 'react';
import JoditEditor from "jodit-react";

const Editor = (props) => {
    const editor = useRef(null)

    return (
        <JoditEditor
            ref={editor}
            value={props.cuerpo}
            tabIndex={1} // tabIndex of textarea
            onBlur={newContent => props.setCuerpo(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={newContent => { }}
        />
    );
};

export default Editor;

import './editor.css';
import React, { useState, useRef, useMemo } from 'react';
import JoditEditorComponent from './JoditEditor';

const config = {
    height: 440,
    buttons: ['bold', 'italic', 'underline', 'lists', 'link']
}


const Editor = () => {

    return (
        <div className="editor">
            <JoditEditorComponent config={config} />
        </div>
    )
}

export default Editor;
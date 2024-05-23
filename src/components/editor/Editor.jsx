
import './editor.css';
import React, { useState, useRef, useMemo } from 'react';
import JoditEditorComponent from './JoditEditor';

const config = {
    height: 440,
    buttons: [
        'source', '|',
        'bold', 'italic', 'underline', 
          '|', '|',
        'font', 'fontsize', 'paragraph', '|',
        'link', 
        'copyformat', 'cut', 'copy', 'paste',  
        'preview', 'print'
    ],
}


const Editor = () => {

    return (
        <div className="editor">
            <JoditEditorComponent config={config} />
        </div>
    )
}

export default Editor;

import './editor.css';
import React, { useState, useRef, useMemo } from 'react';
import JoditEditorComponent from './JoditEditor';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

const config = {
    height: 350,
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

    const [value, setValue] = useState('');

    const saveEditorData = () => {

        console.log('====================================');
        console.log(value);
        console.log('====================================');

        if(value.length !== 0){
            let data = value.slice(3, value.length - 4);
            localStorage.setItem('editorData', JSON.stringify(data));
            toast('Editor data has been submited');
        }
        else{
            localStorage.setItem('editorData', JSON.stringify(''));
        }
    }


    return (
        <div className="editor">
            <JoditEditorComponent setValue={setValue} config={config} />
            <button  onClick={saveEditorData}>Save</button>
            <ToastContainer />
        </div>
    )
}

export default Editor;
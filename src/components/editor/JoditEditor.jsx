import React, { useState, useRef, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import { useSelector } from 'react-redux';



const JoditEditorComponent = ({config }) => {

    let allData = '';
    const editor = useRef(null);

    const [value, setValue] = useState('');
    
    const userData = useSelector(state => state.form.data);
    console.log(userData);

    if(userData.length !== 0){
        let name = userData[0].name;
        let email = userData[0].email;
        let number = userData[0].number;
        let address = userData[0].address
        allData = name + " " + email + " " + number + " " + address
    }
    


    useEffect(() => {
        setValue(userData);
    },[])

    return (
        <JoditEditor
            ref={editor}
            onChange={(content => setValue(content))}
            config={config}
            value={allData} 
            tabIndex={8}
        />
    );
}

export default JoditEditorComponent;
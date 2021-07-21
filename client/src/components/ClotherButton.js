import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ClotherButton = () => {
    let history = useHistory();

    const callFunctioForCategory = (e) => {
        e.preventDefault();
        history.push(process.env.PUBLIC_URL+'/getCate/'+'78')
    }

    return(
        <button className="button-sandal" onClick={callFunctioForCategory}>
            Thời Trang Nam
        </button>
    )
}

export default ClotherButton;
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SandalButton = () => {
    let history = useHistory();

    const callFunctioForCategory = (e) => {
        e.preventDefault();
        history.push(process.env.PUBLIC_URL+'/search/'+'dep')
    }

    return(
        <button className="button-sandal" onClick={callFunctioForCategory}>
            Hell no
        </button>
    )
}

export default SandalButton;
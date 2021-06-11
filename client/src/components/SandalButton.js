import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SandalButton = () => {

    const clickHandle = () => {
        console.log('blablabla')
    }

    return(
        <button className="button-sandal" onClick={clickHandle}>
            Hell no
        </button>
    )
}

export default SandalButton;
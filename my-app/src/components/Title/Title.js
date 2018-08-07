import React from 'react';

import classes from './Title.css';

const Title = (props) => {
    return(
        <div className="title">
            <center>
                <strong>{props.theTitle}</strong>
            </center>
        </div>

    )

}

export default Title ;

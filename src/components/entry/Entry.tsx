import * as React from 'react';

import './entry.scss';

/*
An entry in my portfolio
*/

export interface Props {
title: string;
image: string;
description: string;
date: string;
}

function Entry({title,image, description, date}:Props):JSX.Element{
    return(
    <div>
        <div className="imgContainer">
        <img src="https://www.nautiljon.com/images/perso/00/72/yukine_10027.jpg"></img>
        </div>
        <h2>{ title }</h2>
        <div className="description">
        { description }
        </div>
    </div>
);
    }
    export default Entry;

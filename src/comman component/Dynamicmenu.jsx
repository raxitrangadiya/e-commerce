import React from 'react';
import { useParams } from 'react-router-dom';
const Dynamicmenu = () => {
     const {url}=useParams();
    return (
        <React.Fragment>
            <h5>dynemic menu{url}</h5>
        </React.Fragment>
    );
};

export default Dynamicmenu;
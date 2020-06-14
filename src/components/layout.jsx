import React from 'react';

function Layout (props) {
    // const children = porps.children;
    return (
        <React.Fragment>
            {/* <Navbar /> */}
            {props.children}
        </React.Fragment>
    ) 
}

export default Layout
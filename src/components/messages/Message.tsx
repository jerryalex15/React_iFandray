import React  from 'react';
import AppBar from './AppBar';
import Contents from './Contents';

class Message extends React.Component {

    render(){
        return (
        <>
            <AppBar></AppBar>
            <Contents></Contents>
        </>
        );
    }
}
export default Message;
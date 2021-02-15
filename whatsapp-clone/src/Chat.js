import { Avatar, IconButton } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import "./Chat.css";
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVert from '@material-ui/icons/MoreVert';

function Chat() {
    const [seed, setSeed] = useState("")
    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
    }, []);
    return (
        <div className="chat">
            <div className="çhat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className= "chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen...</p>
                </div>
                <div className= "chat__headerRight">
                <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>        
                </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message chat__receiver`}>
                    <span className="chat__name">sanchita</span>
                    Hey guys
                    <span className="chat__timestamp">3.2pm</span>
                </p>
               
            </div>
            <div className="chat__footer">

            </div>
        </div>
    )
}

export default Chat

import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props)=>{

    return(
        <div style={{height:'100vh'}}>
            <PrettyChatWindow
            projectId='b40989d6-f776-4712-b94a-d7c852cf2e45'
            username={props.user.username}
            secret={props.user.username}
            style={{height:'100%'}}
           />

        </div>
    )
}

export default ChatsPage
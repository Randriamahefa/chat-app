
export default function ChatBoxReceiver({message,user,avatar}) {
    
    return (
        <div 
            style={{
                display:"flex",
                justifyContent:"flex-start",
                flexDirection:"row",
                margin: "15px 0px "
            }}
        >
            <img style={{borderRadius:"50%",width:45,height:45}} src={avatar} alt="avatar" />
            <p style={{margin:"5px 14px",padding:10, backgroundColor:"#b8c998", color:"#000",borderRadius:15,}}>
                <strong style={{fontSize:15,color:"#577efe"}}>
                    {user}
                </strong> <br />
                {message}
            </p>    
        </div>
    )
}

export function ChatBoxSender({message,user,avatar}) {
   
    return (
        <div 
            style={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"flex-end",
                margin: "15px 0px "
            }}
        >           
            <img style={{borderRadius:"50%",width:45,height:45}} src={avatar} alt="avatar" />
            <p style={{margin:"5px 14px",padding:10, backgroundColor:"#fff", color:"#000",borderRadius:15}}>
                <strong style={{fontSize:15,color:"#577efe"}}>
                    {user}
                </strong> <br />
                {message}
            </p>    
        </div>
    )
}
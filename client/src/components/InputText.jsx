import { useState } from "react"
const style ={
    button: {
        width:'10%',
        height:50  ,
        fontWeight: 'bold',
        borderRadius:10 ,
        fontSize:18,
        backgroundColor: '#34b7f1' ,
        bodrerWidth: 0,
        color:'#fff'   
    },
    textarea: {
        width :'60%' ,
        height: 70,
        borderRadius: 10,
        bodrerWidth: 0,
        padding:10,
        fontSize: 18
    },
    textContainer: {
        display: 'flex' ,
        justifyContent: 'space-around',
        alignItems:'center',
        marginTop:25
    }
}

export default function InputText({addNewMessage}) {
    const [message,setMessage] = useState("")

    const AddMessage = () => {
        addNewMessage({
            message
        })
        setMessage('')
    }
    return (
       
        <div style={style.textContainer}>
            <textarea 
                style={style.textarea}
                rows="6"
                placeholder="Votre message ..."
                onChange={e => setMessage(e.target.value)}
            >
            </textarea>
            <button 
            style={style.button}
            onClick={() => AddMessage()}
            > 
                Envoyer
            </button>
        </div>
                
          
    )
} 
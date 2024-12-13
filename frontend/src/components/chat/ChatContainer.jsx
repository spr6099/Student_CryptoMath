import React from 'react'
import '../../style/chat.css'

function ChatContainer() {
  return (
    <div className='chat_body'>
        <section className='chat_container'>
            <MyMessage image={''} message={'perspiciatis nobis dolore optio repellendus assumenda quis.'}/>
            <OtherMessage image={''} message={'Lorem ipsum, dolor sit amet consectetur adipisicing'}/>
            <MyMessage image={''} message={' veniam rem perspiciatis nobis dolore optio repellendus assumenda quis.'}/>
            <OtherMessage image={''} message={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis ea sapiente eaque dicta vel eveniet, veritatis voluptas, molestiae dignissimos est rerum veniam rem perspiciatis nobis dolore optio repellendus assumenda quis.'}/>
            
        </section>
        <section className='chat_form_container'>
            <form>
                <div className='chat_form'>
                    <input className='chat_input' type="text" name="" id="" placeholder='Enter your messages' />
                    <button className='btn btn-success'>send</button>
                </div>
            </form>
        </section>
    </div>
  )
}

function MyMessage({image,message}) {
    return(
        <div className='my_message'>
            <img src={image} alt="" className='message_profile' />
            <p>{message}</p>
        </div>
    )
}
function OtherMessage({image,message}) {
    return(
        <div className='other_message'>
            <p>{message}</p>
            <img src={image} alt="" className='message_profile' />
        </div>
    )
}

export default ChatContainer
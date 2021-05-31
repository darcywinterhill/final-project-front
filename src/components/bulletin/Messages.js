/* import React, { useEffect, useState}  from 'react'

import { MESSAGE_API } from 'reusable/urls'

const Messages = () => {
  const [messages, setMessages] = useState([])
  
  useEffect(() => {
      fetch(MESSAGE_API)
      .then(res => res.json())
      .then(json => {
          setMessages(json.messages)
          console.log(json.messages)
      })
  }, [])

  return (
    <>
    {messages.map((message) => (
    <div {...message} key={message._id}/>
    ))}
</>
  
  )
}

export default Messages
 */
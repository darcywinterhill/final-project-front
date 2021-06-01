import React  from 'react'

/* import { MESSAGE_API } from 'reusable/urls' */

const Messages = () => {
 
  return (
<>
    {messages.map((message) => (
    <div key={message._id}>
    <p>
      {message.message}
    </p>

      <p>
      {message.name}
      </p>

{/*     <p>
      {moment(message.createdAt).fromNow()}
    </p> */}

  </div>))}
  </>
  )
}

export default Messages

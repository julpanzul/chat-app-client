export default function Input({ message, setMessage, sendMessage }) {
  return (
      <form className="form chat">
        <input 
            className="input"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null}
            type="text" />
            <button className="sendButton" onClick={(e) => sendMessage(e)}>Send</button>
      </form>
  );
}

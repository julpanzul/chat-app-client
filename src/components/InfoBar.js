export default function InfoBar({ room }) {
  return (
      <>
        <div className="infobar">
            <div className="leftContainer">
                <p>online</p>
                <h3>{ room }</h3>
            </div>
            <div className="rightContainer">
                <a href="/" className="closeChat">Leave the chat</a>
            </div>
        </div>
      </>
  );
}

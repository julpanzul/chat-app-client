import { useState } from "react"
import { Link } from 'react-router-dom'

function Join() {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    return (
        <>
            <div className="container center">
                <div className="joinContainer">
                    <h1 className="heading">Join</h1>
                    <div className="form">
                        <input type="text" placeholder="Name" className="joinInput" onChange={(e) => setName(e.target.value)} />
                        <input type="text" placeholder="Room" className="joinInput" onChange={(e) => setRoom(e.target.value)} />
                        <Link onClick={(e) => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                            <button className="btn" type="submit">Sign In</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
  );
}

export default Join;

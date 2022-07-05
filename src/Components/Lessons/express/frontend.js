import React from 'react';
import axios from 'axios';


const fetchData = async () => {
    const {data} = await axios.get('http://localhost:3001/users')
    return data
}

const sendData = async (userName) => {
    const newUser = {
        name: userName,
        pass: String(Math.random()).slice(3),
        id: String(Math.random()).slice(3)
    }
    const {data} = await axios.post('http://localhost:3001/users', {
        data: newUser
    })
    return data
}
const updateUser = async (newName, id) => {
    const {data} = await axios.patch('http://localhost:3001/users', {
        data: {
            id,
            name: newName
        }
    })
    return data
}

const deleteUser = async (id) => {
    const {data} = await axios.delete('http://localhost:3001/users', {
        data: {
            id,
        }
    })
    return data
}

export const FrontendWithExpress = () => {
    const [serverData, setServerData] = React.useState([]);
    const [text, setText] = React.useState('');
    const [name, setName] = React.useState('');
    const [selectedUser, setSelectedUser] = React.useState(null)
    React.useEffect(() => {
        fetchData().then((data) => {
            setServerData(data);
        })
    }, [])

    return (
        <div className="App">
            <div>
                <h1>create user</h1>
                <input
                    value={text}
                    onChange={(event) => {
                        setText(event.target.value)
                    }}
                    type="text"/>
                {serverData.map((item) => {
                    return <div
                        onClick={() => {
                            setSelectedUser(item)
                        }}
                        style={{
                            border: selectedUser?.id === item.id ? '1px solid red' : '1px solid black',
                            marginBottom: "10px"
                        }}
                        key={item.id}>
                        name:{item.name} <br/>
                        pass:{item.pass}

                        <button onClick={() => {
                            deleteUser(item.id).then((users)=>{
                                setServerData(users)
                            })
                        }}>delete
                        </button>
                    </div>
                })}

                <button onClick={() => {
                    sendData(text).then((users) => {
                        setServerData(users);
                    })
                }}>send
                </button>
            </div>
            <div>
                <h1>update user name</h1>
                <input onChange={(e) => {
                    setName(e.target.value)
                }} type="text" placeholder={'new name'}/>
                <button onClick={() => {
                    updateUser(name, selectedUser.id).then((users) => {
                        setServerData(users)
                    })
                }}>
                    change name
                </button>
            </div>
        </div>
    );
}


import { useState, useEffect } from 'react'

const FunctionTest = ({ name }) => {
    console.log('component initial')

    const [state, _setState] = useState({
        name: name,
        lastName: '',
        age: 0
    })
    const setState = (obj) => {
        _setState({ ...state, ...obj })
    }
    const handleChangeName = () => {
        setState({ name: "zahra", age: 15 })
    }
    useEffect(() => {
        console.log('component was mounted!')
    }, [name , state])
    return (
        <div>
            {console.log('render is running')}
            <p>
                my original name is {name}
            </p>
            <h1>
                i am function component
                my name is {state.name}
            </h1>
            <h2>
                i have {state.age} years old
            </h2>
            <button onClick={handleChangeName}>Change</button>

        </div>

    )
}
export default FunctionTest
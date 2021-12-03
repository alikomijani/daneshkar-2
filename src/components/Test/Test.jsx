import { Component } from 'react'

class Test extends Component {
    constructor(props) {
        super(props);
        console.log('constractor is running!')
        this.state = {
            name: props.name
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps is running!')
        return {
            name: "mr " + state.name
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate is running")
        if (nextState.name === this.props.name) {
            return false
        }
        return true
    }
    componentDidMount() {
        console.log('componentDidMount is running!')
        console.log(this.state.name)
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    render() {
        console.log('render is runnin is running!')
        const { name } = this.state
        return (
            <div>
                hy my original name is : {this.props.name}
                <br />
                hello i am {name} component
                <button onClick={() => {
                    this.setState({ name: 'ali' })
                }}>change my name</button>
            </div>
        )
    }
}

export default Test

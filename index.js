const { Component } = React;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: [
                { color: '#FF0000', locked: false },
                { color: '#00FF00', locked: false },
                { color: '#0000FF', locked: false },
                { color: '#00FFFF', locked: false },
                { color: '#FF00FF', locked: false },
                { color: '#FFFF00', locked: false }
            ]
        };
    }

    lockColor(num) {
        let colors = [...this.state.colors];
        colors[num].locked = !colors[num].locked;
        this.setState({ colors });
    }

    randColor() {
        let color = '#';
        for (let i = 0; i < 6; i++) {color += Math.floor(Math.random() * 16).toString(16).toUpperCase();}
        return color;
        // return "#" + Math.floor(Math.random() * 16777215).toString(16).toUpperCase();
    }

    newColors() {
        let colors = this.state.colors.map(({color, locked}) => locked ? {color, locked} : { color: this.randColor(), locked})
        this.setState({ colors });
    }

    render() {
        return (
            <div>
                <div className='text-center bg-dark fixed-top'>
                    <button onClick={() => this.newColors()} className='btn btn-secondary m-1'>
                        RANDOMIZE COLORS
                    </button>
                </div>
                <div className='w-100 d-flex' style={{ height: '100vh' }}>
                    {this.state.colors.map((color, i) => (
                        <div
                            key={i}
                            style={{ backgroundColor: color.color }}
                            className='w-100 d-flex flex-column align-items-center justify-content-center'
                        >
                            <h1>{color.color}</h1>
                            <button onClick={() => this.lockColor(i)} className='btn btn-dark'>
                                {color.locked ? 'locked' : 'unlocked'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

const Heading = props => React.createElement('h1', props)

const App = () => React.createElement('main', {}, [
  Heading({ children: 'Hello, World!', key: 'hello' }),
])

ReactDOM.render(App(), document.getElementById('root'));

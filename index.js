const Heading = props => <h1 {...props} />

const App = () => (
  <main>
    <Heading>Hello, World!</Heading>
  </main>
)

ReactDOM.render(<App />, document.getElementById('root'));

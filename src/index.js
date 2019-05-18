import { h, render } from 'preact'

const Heading = props => <h1 {...props} />

const App = () => (
  <main>
    <Heading>Hello, World!</Heading>
  </main>
)

render(<App />, document.getElementById('root'));

import '../src/index.css'
import '../src/scaffold.css'

export const decorators = [
  (Story) => (
    <div style={{ margin: '1em' }}>
      <Story />
    </div>
  ),
]

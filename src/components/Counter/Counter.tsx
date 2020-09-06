import * as React from 'react'

function Counter(): JSX.Element {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <button
        aria-label="decrement"
        onClick={() => setCount(count - 1)}
        type="button"
      >
        -
      </button>
      <div>{count}</div>
      <button
        aria-label="increment"
        onClick={() => setCount(count + 1)}
        type="button"
      >
        +
      </button>
    </div>
  )
}

export default Counter

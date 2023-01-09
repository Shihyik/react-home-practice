import React from 'react'

function MyContent(props) {
  return (
    <>

      <main role="main" className="flex-shrink-0">
        <div className="container h-500p bg-info">{props.children}</div>
      </main>
    </>
  )
}

export default MyContent

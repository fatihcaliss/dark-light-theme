import React from 'react'

const Article = ({ data }) => {
  return (
    <>
      {data.map((item, i) => {
        return <div key={i} className="item">
          <h2>{item.title}</h2>
          <h4><i>{item.date.toString().split(' ').splice(1,3).join(' ')}</i></h4>
          <h3>{item.snippet}</h3>
        </div>
      })}
    </>
  )
}

export default Article

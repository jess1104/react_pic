import React from 'react'

const Picture = ({ data }) => {
  return (
    <div className='picture'>
        <p>作者:{ data.photographer }</p>
        {/* 要去做出圖片放大效果 */}
        <div className="imageContainer">
            <img src={ data.src.large } alt="" />
        </div>
        <p>
            <a target="_blank" href={data.src.large} rel="noreferrer">下載圖片</a>
        </p>
    </div>
  )
}

export default Picture
import React from 'react';

// 提領外層的searchPic來用
const Search = ({searchPic,setInput }) => {
  const inputHandler = (e) => {
    console.log(e.target.value);
    setInput(e.target.value)
  }
  return (
    <div className='search'>
        <input onChange={ inputHandler } type="text" />
        {/* 點擊使用searchPic */}
        <button onClick={ searchPic }>搜尋</button>
    </div>
  )
}

export default Search
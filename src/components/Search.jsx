import React from 'react';

// 提領外層的searchPic來用
const Search = ({searchPic}) => {
  return (
    <div className='search'>
        <input type="text" />
        {/* 點擊使用searchPic */}
        <button onClick={ searchPic }>搜尋</button>
    </div>
  )
}

export default Search
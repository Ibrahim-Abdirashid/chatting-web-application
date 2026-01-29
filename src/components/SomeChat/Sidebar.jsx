
import React from 'react'
import Header from './Header'
import SearchFriends from './SearchFriends'
import Friends from './Friends'

const Sidebar = () => {
  return (
    <div className=' flex-1 bg-[#028a7e] min-h-screen relative'>
      <Header />
      <SearchFriends />
      <Friends />
    </div>
  )
}

export default Sidebar
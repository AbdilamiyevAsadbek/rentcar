import './topbar.css'
import { Search, FavoriteBorder, NotificationsNone, Settings } from '@mui/icons-material'
function Topbar() {
  return (
    <div className='topbarContainer d-flex justfiy-space-between'>
      <div className="topbarLeft">
        <img src="./assets/Logo.svg" alt="logo" />
      </div>
      <div className="topbarCenter">
        <div className="searchbar d-flex justfiy-space-between">
          <div className="searchBarInput d-flex ">
          <Search className='cursor-pointer'/>
          <input placeholder='Search something here' className='searchInput' />
          </div>
          <img src="/assets/filter.svg" alt="icon" className='cursor-pointer' />
        </div>
      </div>
      <div className="topbarRight d-flex justfiy-end gap-20">
        <div className='topbarIcons d-flex justfiy-space-between gap-20'>
          <div className="topbarIconItem cursor-pointer " >
            <FavoriteBorder/>
          </div>
          <div className="topbarIconItem red-notification cursor-pointer ">
            <NotificationsNone/>
            <img src="./assets/red_logo.svg" alt="" />
          </div>
          <div className="topbarIconItem cursor-pointer ">
            <Settings/>
          </div>
        </div>
        <img src="/assets/proflile_avatar.svg" alt="profile"  className='cursor-pointer'/>
      </div>
    </div>
  )
}

export default Topbar


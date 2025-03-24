import React from 'react'
import SubMain from './sub/subMain'
import SubMovie from './sub/subMovie'
import SubDrama from './sub/subDrama'
import SubWebtoon from './sub/subWebtoon'
import SubAnime from './sub/subAnime'


const MainIndex = () => {
  return (
   <>
    <div className="main3">
        <div className="main3-con">
            <SubMain/>
            <SubMovie/>
            <SubDrama/>
            <SubAnime/> 
            <SubWebtoon/>
        </div>
    </div>
   
   </>
  )
}

export default MainIndex
import React from 'react'
import Slide from '../Component/Hero/Slide/Slide'
import Packages from '../Component/Hero/Packages/Packages'
import Reviews from '../Component/Hero/Reviews/Reviews'
import Partners from '../Component/Hero/Partners/Partners'
import Frequs from '../Component/Hero/Frequently Ques/Frequs'
import Banner from '../Component/Hero/Slide/Banner'
import SectionDivider from '../assets/Sectiondivider/SectionDivider'




export default function Home() {
  return (
    <div className='Home'>
      <div className='mb-5'>
        <Banner/>
        </div>
    
      <div  style={{minHeight: "100vh",position:"relative" }}> 
      <SectionDivider bottom={-30}/>
         <Slide/></div>
      <div style={{minHeight: "100vh",position:"relative"}}> 
      <SectionDivider bottom={30}/>
         <Packages/></div>
      <div style={{minHeight: "100vh",position:"relative"}}> 
      <SectionDivider bottom={-30}/>
      <Reviews/></div>
      <div style={{minHeight: "100vh",position:"relative"}}>
      <SectionDivider bottom={-30}/>
         <Partners/></div>
      <div style={{position:"relative"}}> 
      <SectionDivider bottom={-30}/>
        <Frequs/>   </div>  
    </div>
  )
}

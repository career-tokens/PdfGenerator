import React from 'react'
import AnimatedLogoCloud from '../syntaxui/AnimatedLogoCloud'
import SectionTitle from '../Common/SectionTitle'

const LogoMarquee = () => {
  return (
    <>
    <section id="companies" className="py-16 md:py-20 lg:py-28 dark:bg-black">
      <div className="container">
        <SectionTitle
          title="Land Interviews at Top Companies"
          paragraph=""
          center
        />
        <div className="max-w-7xl mx-auto px-8">
    <AnimatedLogoCloud/>
  </div>
      </div>
    </section>
  </>
  )
}

export default LogoMarquee
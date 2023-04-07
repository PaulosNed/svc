import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function LinkComponent({page, selectedPage, setSelectedPage}) {
  return (
    <AnchorLink
        className={`capitalize hover:text-yellow-500 transition duration-500 ${selectedPage === page ? 'text-yellow-500' : 'text-white'}`}
        href={`#${page}`}
        onClick={() => setSelectedPage(page)}
    > {page} </AnchorLink>
  )
}

export default LinkComponent
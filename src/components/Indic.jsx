import React from 'react'

function Indic() {
  return (
    <div className="fixed bottom-2 left-4 text-white z-20">
      <span className="sm:hidden font-bold">XS</span>
      <span className="hidden sm:flex  md:hidden font-bold">SM</span>
      <span className="hidden md:flex lg:hidden font-bold">MD</span>
      <span className="hidden lg:flex xl:hidden font-bold">LG</span>
      <span className="hidden xl:flex 2xl:hidden font-bold">XL</span>
      <span className="hidden 2xl:flex font-bold">XL</span>
    </div>
  )
}

export default Indic
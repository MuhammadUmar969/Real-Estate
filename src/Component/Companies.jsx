import React from 'react'
import prologis from '/public/images/prologis.png'
import tower from '/public/images/tower.png'
import equinix from '/public/images/equinix.png'
import realty from '/public/images/realty.png'
const Companies = () => {
  return (
    <>
      <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter cm-container">
            <img src={prologis} alt="prologis" />
            <img src={tower} alt="tower" />
            <img src={equinix} alt="equinix" />
            <img src={realty} alt="realty" />
        </div>
      </section>

    </>
  )
}

export default Companies

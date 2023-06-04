import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import {MdOutlineArrowDropDown} from 'react-icons/md'
import data from './Accordion'
import value from '/public/images/value.png'

const Value = () => {
  return (
    <>
      <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
           <div className="v-left">
             <div className="img-container">
               <img src={value} alt="value" />
             </div>
           </div>

           <div className="flexColStart v-right">
              <span className="orangeText">
               Our Value
              </span>

              <span className="primaryText">
               Value We Give to You
              </span>

              <span className="secondaryText">
                We always ready to help by providijng the best services for you.
                <br />
                We beleive a good blace to live can make your life better
              </span>

              <Accordion
              className="accordion"
              allowMultipleExpanded={false}
              preExpanded={[0]}>
                  {
                     data.map((item,i) => {
                      const [expanded, setExpanded] = useState(false)

                      const toggleAccordion = () => {
                        setExpanded(!expanded);
                      }

                       return(
                        <AccordionItem 
                        className={`accordion-item${expanded ? "expanded" : "collapsed"}`} 
                        key={i} uuid={i}>
                          <AccordionItemHeading>
                            <AccordionItemButton 
                            className="flexCenter accordion-button"
                            onClick={toggleAccordion}>

                              <div className="flexCenter icon">
                                {item.icon}
                              </div>

                              <span className="primaryText">
                                {item.heading}
                              </span>

                              <div className="flexCenter icon">
                                 <MdOutlineArrowDropDown size={20} />
                              </div>
                            </AccordionItemButton>
                          </AccordionItemHeading>

                          <AccordionItemPanel>
                            <p className="secondaryText">
                              {item.detail}
                            </p> 
                          </AccordionItemPanel>  
                        </AccordionItem>                  
                      );
                     })
                  }
              </Accordion>
           </div>
        </div>
      </section>
    </>
  )
}

export default Value

import React, { useEffect, useState } from 'react'
import "./CSS/Home.css"
import Navbar from './Navbar.js'
import Monthlyreturn from './containers/Monthlyreturn.js'
import Update from './Update.js'
import Factsheet from './Factsheet.js'
import Sidebar from './Sidebar.js'
import Errortext from './elements/Errortext.js'
import Button from './elements/Button.js'
import Addteam from './containers/Addteam.js'
import FundForm from './FundForm.js'
import Discrete from './containers/Discrete.js'
import Shareclass from './containers/Shareclass.js'
import axios from 'axios'

function Home() {

  const [elementdisplay, setelementdisplay] = useState("home")
  const [innerelement, setinnerelement] = useState("preview")

  const [fundname, setfundname] = useState()
  const [funddata, setfunddata] = useState()
  const [alldetails, setalldetails] = useState()


  const change_to_addfund = () => {
    setelementdisplay("addfund")
    document.getElementById("button_element").style.display = "none"
  }
  const inner_element_preview = () => {
    setinnerelement("preview")
  }
  const inner_element_edit = () => {
    setinnerelement("edit")
  }

  const add_fund = async () => {
    try {
      let responce = await axios.post("http://localhost:5000/api/v1/funds/addfund", { name: fundname, email: "demo@gmail.com" })
      console.log(responce);
    } catch (error) {
      console.log(error);
    }
  }

  const handle_fund_data = (item) => {
    // console.log('Selected Item:', item);
    setfunddata(item)
    get_fund_details(item.id)
  };

  const get_fund_details = async (get_id) => {
    try {
      let responce = await axios.post("http://localhost:5000/api/v1/funds/alldetails", { fund_id: get_id })
      console.log(responce.data.data);
      setalldetails(responce.data.data)
      console.log(alldetails.description);

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='home-structure'>

      <div className='home-set-element'>
        <Sidebar change_to_addfund={change_to_addfund} fund_data={handle_fund_data} />



        {elementdisplay === "home" ? (
          <div className='home-inner-structure'>
            <div>
              <Navbar inner_element_preview={inner_element_preview} inner_element_edit={inner_element_edit} all_details={alldetails} />

              {innerelement === "preview" ? (
                <div className='home-setter'>

                  <div className='homepage-scroll'>
                    <div className='home-page'>
                      <div className="home-header">

                        <div className='home-title-section'>
                          <img src="https://static.vecteezy.com/system/resources/previews/028/233/398/non_2x/letter-m-book-simple-elegant-education-logo-vector.jpg" alt="" />

                          {funddata && (
                            <div className='fund-data-section'>
                              <h4>{funddata.name}</h4>
                              <span>{funddata.date_time}</span>
                            </div>
                          )}
                        </div>

                        {alldetails && (

                          <div className='home-content-section'>
                            <h4>About the fund</h4>
                            <span>{alldetails[0]?.description}</span>
                            <div>
                              <h3>The fund aims to track the performance of the 1OAK MA80 Strategy, which has a benchmark allocation of approximately 80% in Equities with 20% in Bonds and Alternatives.. The strategy has exposure to equities, fixed income, cash and alternative assets.</h3>
                              <h3>Founded in 2009, 1OAK Capital is a London based firm specialised in Asset Management and Advisory, with a focus on investment solutions dedicated to institutional clients and MiFID II professionals. 1OAK Capital is headquartered in London with a branch in Rome and presence in New York and Dubai.</h3>
                            </div>
                          </div>

                        )}


                        <div className='br'>
                          <br />
                        </div>

                        <div className='home-team-section'>
                          <h3>Team</h3>

                          <div className='team-section-members'>

                            <div>
                              <h3>David stuff</h3>
                              <h4>Managing director</h4>
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s" alt="" />
                            </div>
                            <div>
                              <h3>David stuff</h3>
                              <h4>Managing director</h4>
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s" alt="" />
                            </div>
                            <div>
                              <h3>David stuff</h3>
                              <h4>Managing director</h4>
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s" alt="" />
                            </div>
                            <div>
                              <h3>David stuff</h3>
                              <h4>Managing director</h4>
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s" alt="" />
                            </div>
                            <div>
                              <h3>David stuff</h3>
                              <h4>Managing director</h4>
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s" alt="" />
                            </div>
                            <div>
                              <h3>David stuff</h3>
                              <h4>Managing director</h4>
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s" alt="" />
                            </div>
                            <div>
                              <h3>David stuff</h3>
                              <h4>Managing director</h4>
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s" alt="" />
                            </div>

                          </div>
                        </div>

                        <div className='br'>
                          <br />
                        </div>

                        <div className='home-benchmark-section'>
                          <div><h3>Benchmark</h3></div>

                          <div className='benchmark-detail'>
                            <div>
                              <h4>Benchmark 1</h4>
                              <h4>Eureka Hedge Equity Market Neutral Index</h4>
                            </div>
                            <div>
                              <h4>Benchmark 1</h4>
                              <h4>Eureka Hedge Equity Market Neutral Index</h4>
                            </div>
                          </div>

                        </div>

                        <div className='br'>
                          <br />
                        </div>

                        <Monthlyreturn />

                        <div className='br'>
                          <br />
                        </div>

                        <Discrete />



                        <div className='br'>
                          <br />
                        </div>


                        <div className='home-qa-section'>
                          <h2>Q&A</h2>
                          <h3>Henrick Klassen @ Bluebay <span>on 3 July 2021</span></h3>
                          <h4>What philosophy do you use for risk management? What are your primary metrics that you follow for risk management to limit dwardowns?</h4>

                          <div className="qa-details">
                            <h4>The fund aims to track the performance of the 1OAK MA80 Strategy, which has a benchmark allocation of approximately 80% in Equities with 20% in Bonds and Alternatives.. The strategy has exposure to equities, fixed income, cash and alternative assets</h4>
                            <h4 id='margin-top'>The fund aims to track the performance of the 1OAK MA80 Strategy, which has a benchmark allocation of approximately 80% in Equities with 20% in Bonds and Alternatives. The fund aims to track the performance of the 1OAK MA80 Strategy, which has a benchmark allocation of approximately 80% in Equities with 20% in Bonds and Alternatives..
                              <span>more</span>
                            </h4>
                            <span className="material-symbols-outlined downloadlogo1">
                              download
                            </span>
                          </div>
                        </div>

                        <div className='br'>
                          <br />
                        </div>


                        <Shareclass />
                      </div>

                    </div>
                  </div>


                </div>


              ) : (
                <FundForm all_details={alldetails} />
              )}

            </div>

            <div className='rightbar'>
              <Update />
              <Factsheet />
            </div>

          </div>
        ) : null}



        {elementdisplay === "addfund" ? (
          <div className='addfund-structure'>
            <div className='addfund'>
              <div className='addfund-input-section'>
                <h4>Please enter strategy name below.</h4>
                <input type="text" placeholder='Fund name' onChange={(e) => setfundname(e.target.value)} />
                <Button value={"Add Fund"} change_to_addfund={add_fund}></Button>
              </div>

              {/* <div className='addfund-placeholder'>
                <h3>Fund created.</h3>
                <span>Please edit the form to populate data and information.</span>
              </div> */}
            </div>
          </div>

        ) : null}

      </div>


    </div>
  )
}

export default Home

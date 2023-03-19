import React from 'react'
import VerticalNavbar from '../../Components/VerticalNavbar/VerticalNavbar'
import Navbar from '../../Components/Navbar/Navbar'
import './Feedback.css'
import Footer from '../../Components/Footer/Footer'
const Feedback = () => {
  return (
    <div className='feedbackContainerDiv'>
        <VerticalNavbar />  
        <div className="FeedbackNav">
            <Navbar />
        </div>

        <div className='FeedbackContainer' style={{width: '960px', margin: '0 auto', paddingTop:' 80px', paddingBottom: '80px'}}>

            <h1>Angela Yu</h1>
            <div className="testimonial-quote group">
                <img src="http://placehold.it/120x120" />
                <div className="quote-container">
                    <blockquote>
                    <p>Overall, fantastic! I'd recommend them to anyone looking for a creative, thoughtful, and professional team.”</p>
                    </blockquote>
                    {/* <cite><span>Kristi Bruno</span><br>
                    Social Media Specialist<br>
                    American College of Chest Physicians
                    </cite> */}
                </div>
            </div>

            <hr style={{margin: '60px auto', opacity: .5}}/>

            <h1>Mohib Abbas Sayed</h1>
            <div className="testimonial-quote group right">
            <img src="http://placehold.it/120x120" />
            <div className="quote-container">
                <div>
                <blockquote>
                    <p>Overall, fantastic! I'd recommend them to anyone looking for a creative, thoughtful, and professional team.”</p>
                </blockquote>
                {/* <cite><span>Kristi Bruno</span><br>
                    Social Media Specialist<br>
                    American College of Chest Physicians
                </cite> */}
                </div>
            </div>
            </div>

             <hr style={{margin: '60px auto', opacity: .5}} />

             <h1>Parthos</h1>
            <div className="testimonial-quote group">
                <img src="http://placehold.it/120x120" />
                <div className="quote-container">
                    <blockquote>
                    <p>Overall, fantastic! I'd recommend them to anyone looking for a creative, thoughtful, and professional team.”</p>
                    </blockquote>
                    {/* <cite><span>Kristi Bruno</span><br>
                    Social Media Specialist<br>
                    American College of Chest Physicians
                    </cite> */}
                </div>
            </div>

            <hr style={{margin: '60px auto', opacity: .5}}/>

            <h1>Hamzagm</h1>
            <div className="testimonial-quote group right">
            <img src="http://placehold.it/120x120" />
            <div className="quote-container">
                <div>
                <blockquote>
                    <p>Overall, fantastic! I'd recommend them to anyone looking for a creative, thoughtful, and professional team.”</p>
                </blockquote>
                {/* <cite><span>Kristi Bruno</span><br>
                    Social Media Specialist<br>
                    American College of Chest Physicians
                </cite> */}
                </div>
            </div>
            </div>

            <hr style={{margin: '60px auto', opacity: .5}}/>

            <h1>thosparth</h1>
            <div className="testimonial-quote group">
                <img src="http://placehold.it/120x120" />
                <div className="quote-container">
                    <blockquote>
                    <p>Overall, fantastic! I'd recommend them to anyone looking for a creative, thoughtful, and professional team.”</p>
                    </blockquote>
                    {/* <cite><span>Kristi Bruno</span><br>
                    Social Media Specialist<br>
                    American College of Chest Physicians
                    </cite> */}
                </div>
            </div>

            <hr style={{margin: '60px auto', opacity: .5}}/>

            <h1>hamzawp</h1>
            <div className="testimonial-quote group right">
            <img src="http://placehold.it/120x120" />
            <div className="quote-container">
                <div>
                <blockquote>
                    <p>Overall, fantastic! I'd recommend them to anyone looking for a creative, thoughtful, and professional team.”</p>
                </blockquote>
                {/* <cite><span>Kristi Bruno</span><br>
                    Social Media Specialist<br>
                    American College of Chest Physicians
                </cite> */}
                </div>
            </div>
            </div>

            <hr style={{margin: '60px auto', opacity: .5}}/>


            {/* <h1>600px-Wide, Right-Aligned</h1>
            <div className="testimonial-quote group right" style={{ width: '600px', marginRight: 'auto'}}>
            <img src="http://placehold.it/120x120" />
            <div className="quote-container">
                <div>
                <blockquote>
                    <p>Overall, fantastic! I'd recommend them to anyone looking for a creative, thoughtful, and professional team.”</p>
                </blockquote>
                </div>
            </div>
            </div> */}

            {/* <hr style={{margin: '60px auto', opacity: .5}} />

            <h1>600px Wide, Right-Aligned</h1>
            <div className="testimonial-quote group " style={{ width: '600px', marginRight: 'auto'}}>
            <img src="http://placehold.it/120x120" />
            <div className="quote-container">
                <blockquote>
                <p>Overall, fantastic! I'd recommend them to anyone looking for a creative,<br /> thoughtful, and professional team.”</p>
                </blockquote>
            </div>
            </div> */}

           

        </div>
        <div className="feedbackFooter">
        <Footer />
        </div>
    </div>
  )
}

export default Feedback
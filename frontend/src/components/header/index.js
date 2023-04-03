import './index.css'
import React from 'react';
import header from '../../images/home-header.png'
import image1 from '../../images/online.jpg'
import image2 from '../../images/img2.png'
const Header = () => {
return(

<div className='header'>
    <h1 className='header-title'>E-ducate: Online E-Learning System</h1>
    <div>
        <img src={header}alt="header" />
    </div>
    <h1 className='header-title'>What is E-learning?</h1>
    <div className='header-title'>
       <p>E-learning, short for electronic learning, is the delivery of education and training through digital technology. It involves using the internet, computers, tablets, and smartphones to access educational materials, courses, and resources. E-learning offers a more flexible and personalized learning experience compared to traditional classroom-based learning. It can include a wide range of educational content, such as interactive simulations, multimedia presentations, virtual classrooms, and discussion forums. E-learning has become increasingly popular in recent years, and it is used by schools, universities, training organizations, and businesses to deliver education and training programs to learners of all ages and backgrounds.</p>
    </div>
    <div className='img1-container'>
        <img className='img1' src={image1} alt="" />
    </div>
    <h1 className='header-title'>Benefits of E-learning</h1>
    <div>
        <ul>
            <li><b>Flexibility:</b> E-learning allows learners to access course material at their own pace and at any time, making it easier to fit learning around work and other commitments.</li>
            <li><b>Cost-effectiveness: </b>E-learning is often less expensive than traditional classroom-based learning, as it eliminates the need for travel, textbooks, and other materials.</li>
            <li><b>Improved retention:</b>Studies have shown that e-learning can lead to improved retention rates and a better understanding of course material compared to traditional classroom-based learning.</li>
            <li><b>Personalized learning:</b>E-learning allows learners to customize their learning experience, choosing the materials and pace that work best for them.</li>
            <li><b>Accessibility: </b>E-learning can be accessed by anyone with an internet connection, making it easier for people in remote or underserved areas to access education and training.</li>
            <li><b>Environmentally friendly:</b>E-learning eliminates the need for physical textbooks and other materials, reducing paper waste and environmental impact.</li>
            <li><b>Better performance:</b>E-learning can lead to better performance outcomes, as learners are able to focus more on the material and work at their own pace.</li>
        </ul>
    </div>
    <div className='img1-container'>
        <img className='img2' src={image2} alt="" />
    </div>
     <h1 className='header-title'>Our Mission</h1>
     <div className='header-title'>
       <p>E-ducate is a comprehensive e-learning platform designed to provide accessible and high-quality education to students worldwide. Our mission is to empower learners of all ages and backgrounds to reach their full potential by offering a range of courses and resources tailored to their needs. Using the latest technology, including Electron.js for Desktop Apps, React.js for the website, Node.js for the backend, and MongoDB as the database, we aim to create a user-friendly and engaging platform that encourages lifelong learning. Users can register and log in to the website, enroll in courses, and access a variety of educational materials, including files, PDFs, and documents. E-ducate also offers a withdrawal system that allows users to drop a course and apply for withdrawal, which can be approved or rejected by our team of administrators. At E-ducate, we are committed to providing a seamless and dynamic e-learning experience that fosters creativity, critical thinking, and intellectual curiosity.</p>
    </div><br/><br/>
</div>
)
}
export default Header

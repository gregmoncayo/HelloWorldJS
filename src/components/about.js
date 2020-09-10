import React from 'react';
import Image from 'react-image-resizer';

import code from '../assets/img/code2.jpg'
import '../App.css';

{/* About page */}

function About() {
    const imageStyle = {
        float: 'right',
      };

    return (
        <div>
            <Image
              src={code}
              height={740}
              width={640}
              style={imageStyle}
            />
              <p className="App-style">
              Since 2019, we have been providing users and clients the best   <br></br>
              experience when it comes to our product suite. At ToUpper LLC,  <br></br>
              we pride and distinguish ourselves by using the most cutting    <br></br>
              edge technology and efficient techniques when developing        <br></br>
              applications. We strive to produce the most elegant and         <br></br>
              easy-to-use applications for our clients to enhance their       <br></br> 
              business.

              <br></br>
              <br></br>

              During our planning process, we strategize to map out <br></br>
              a robust project timeline in order to make sure that your <br></br>
              desired launch date is met. In order to ensure that your <br></br> 
              application(s) is customer ready, we profusely test our <br></br>
              application(s) to ensure the highest level of security <br></br>
              is applied, weddle out any bugs, and solve any issues <br></br> 
              that may arise during implementation. We also offer <br></br> 
              publishing services once your project is completed, <br></br>
              as well as any maintenance that your application(s) <br></br> 
              may require. If you are interested in cloud services <br></br>
              or cloud deployment, we will be happy to consult<br></br>
              with you to determine the best possible outcome.
              

              <br></br>
              <br></br>

              Let the geeks help! We know creating a website isn't easy, <br></br>
              so let us do the hard work for you. Please contact us and  <br></br>
              provide any questions or comments you may have! We  <br></br> 
              will be happy to provide a free first consultation.
              </p>
      </div>
    );
}

export default About;
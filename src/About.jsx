import React from 'react';
import Web1 from '../src/images/about.png';
import Comman from './Comman';
import Ab from '../src/images/Ab1.jpg'


const About = () => {
  return(
  <>
  <Comman name='Welcome to about page' imgsrc={Web1} visit="/contact" btname="Contact Now"/>
  <div className="container-fluid nav_bg mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                <img src={Ab} alt="Ab1"/>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent felis elit, tincidunt ac mollis ut, consectetur in enim. Curabitur id odio a turpis mattis consectetur. Pellentesque feugiat velit neque, a molestie magna scelerisque a. Fusce mollis, nunc non pretium facilisis, elit quam rhoncus lectus, at sagittis velit erat id nulla. Donec et lorem ex. Integer eleifend sapien et erat ornare vulputate. Vivamus mattis, nibh sit amet sodales venenatis, nunc erat tincidunt felis, eu efficitur urna neque vel metus. Donec velit eros, feugiat id pellentesque non, dictum ut massa. In aliquet neque ac est facilisis, id malesuada purus consequat. Vivamus quis augue quam. Maecenas rhoncus magna sodales augue euismod, non consequat turpis placerat. Quisque aliquet turpis quam, ut ornare tellus porta in. Nunc non nisi ligula.
                  </p>
                  <p>
                  Aenean bibendum enim in velit suscipit varius ut nec ante. Vestibulum pulvinar arcu eros, at congue risus interdum ut. Curabitur fermentum neque sit amet quam cursus dignissim. Nulla justo turpis, accumsan vulputate sagittis id, iaculis dignissim urna. Aliquam vel metus in diam accumsan sagittis id in arcu. Sed sagittis mauris dui, ut aliquet leo suscipit a. Sed dapibus tellus auctor auctor ultricies. Pellentesque ut lorem elementum magna convallis pharetra.Quisque rhoncus augue ut neque gravida, nec mollis enim laoreet. Pellentesque metus dolor, venenatis iaculis nulla ac, malesuada placerat ante. Fusce suscipit dui id purus ornare, sit amet elementum felis hendrerit.
                  </p>
                  </div>
                  </div>
                  </div>
                </div>
                </div>
  </>);
}



export default About;

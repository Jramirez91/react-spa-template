import React, { Component } from "react";
import OwlCarousel from 'react-owl-carousel';
import $ from 'jquery';
import "./style.scss";
class Home extends Component {
  constructor(props) {
        super(props);   

        this.state = {
            options: {
                loop: true,
                margin:10,
                nav:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:5
                    }
                }
            },

            items: [
                <div className="item" key={1}><h4>1</h4></div>,
                <div className="item" key={2}><h4>2</h4></div>,
                <div className="item" key={3}><h4>3</h4></div>,
                <div className="item" key={4}><h4>4</h4></div>,
                <div className="item" key={5}><h4>5</h4></div>,
                <div className="item" key={6}><h4>6</h4></div>,
                <div className="item" key={7}><h4>7</h4></div>,
                <div className="item" key={8}><h4>8</h4></div>,
                <div className="item" key={9}><h4>9</h4></div>,
                <div className="item" key={10}><h4>10</h4></div>,
                <div className="item" key={11}><h4>11</h4></div>,
                <div className="item" key={12}><h4>12</h4></div>,
            ],

        };
    }

    render() {
        return (
            <div>
                <OwlCarousel
                    ref={inst => this.slider = inst}
                    className="owl-theme"
                    {...this.state.options}
                >
                    {this.state.items}
                </OwlCarousel>

                <div>
                  <h2>HELLO</h2>
                    <p>Cras facilisis urna ornare ex volutpat, et
                      convallis erat elementum. Ut aliquam, ipsum vitae
                      gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                      metus nec massa. Maecenas hendrerit laoreet augue
                      nec molestie. Cum sociis natoque penatibus et magnis
                      dis parturient montes, nascetur ridiculus mus.</p>
                    <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
                </div>
            </div>
        );
    }
}

export default Home;

//   render() {
//     return (
//       <div>
//         <h2>HELLO</h2>
//         <p>Cras facilisis urna ornare ex volutpat, et
//         convallis erat elementum. Ut aliquam, ipsum vitae
//         gravida suscipit, metus dui bibendum est, eget rhoncus nibh
//         metus nec massa. Maecenas hendrerit laoreet augue
//         nec molestie. Cum sociis natoque penatibus et magnis
//         dis parturient montes, nascetur ridiculus mus.</p>
//         <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
//         <OwlCarousel margin={10} >
//           <div class="item"><h4>1</h4></div>
//           <div class="item"><h4>2</h4></div>
//           <div class="item"><h4>3</h4></div>
//           <div class="item"><h4>4</h4></div>
//           <div class="item"><h4>5</h4></div>
//           <div class="item"><h4>6</h4></div>
//         </OwlCarousel>
//       </div>
//     );
//   }
// }
 
// export default Home;
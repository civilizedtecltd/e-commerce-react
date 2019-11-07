import React, { Component } from "react";
import "./test.css";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prev: 0,
      next: 1
    };

    this.handleNext = this.handleNext.bind(this);
    this.handlePreviews = this.handlePreviews.bind(this);
  }

  handleNext(event) {
    this.setState({ prev: ++this.state.prev , next: ++this.state.next })
    if(this.state.prev>=1 && this.state.prev !==4){
        const btnPrev = document.getElementById(this.state.prev-1);
        btnPrev.classList.remove('d-none')


    }
  }

  handlePreviews() {
    this.setState({ prev: --this.state.prev , next:--this.state.next})
    if(this.state.next===0  && this.state.next !== 4){
         const nextBtn= document.getElementById(this.state.next+1)
         
         const btnPrev = document.getElementById(this.state.prev+1);

         console.log(nextBtn)
         console.log(btnPrev)
    }
  }

  render() {
    return (
      <>
        <div>
          <div className="button-wrapper d-flex justify-content-around align-items-center">
            <button type="button" className="btn btn-active text-uppercase">
              address details
            </button>
            <i className="fas fa-angle-double-right"></i>
            <button type="button" className="btn btn-inactive text-uppercase">
              payment and delivery
            </button>
            <i className="fas fa-angle-double-right"></i>
            <button type="button" className="btn btn-inactive text-uppercase">
              order confirmation
            </button>
          </div>
          <div id="step-1" className="step-1 active-tab">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            obcaecati fugit maiores tenetur sint, repellendus accusantium labore
            dolore doloribus quisquam quas in! Obcaecati maiores delectus
            commodi nobis numquam quasi cumque? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Explicabo, aliquid ullam! Quasi
            deserunt aliquam sint natus animi mollitia aliquid tempore suscipit?
            Eum voluptate quasi esse ipsa! Tempora porro optio hic? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quae facere recusandae
            impedit alias. Repudiandae in hic obcaecati ullam consectetur
            nesciunt, error cumque eos dignissimos quisquam, eum laudantium,
            saepe earum aperiam! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Voluptates, quo dignissimos veritatis doloribus ab
            quisquam obcaecati perferendis deserunt repudiandae similique, non
            pariatur corrupti magnam officiis numquam neque ducimus iure id.
          </div>
          <div id="step-2" className="step-2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            quae quidem veritatis maxime magni, ipsa cum voluptatem obcaecati
            itaque, vero, cumque expedita qui illum molestias quia praesentium
            hic! Voluptas, nobis.
          </div>
          <div id="step-3" className="step-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus fugit consectetur optio voluptas animi ratione quo
            deserunt impedit. Deserunt tempora, distinctio temporibus
            praesentium sit excepturi architecto tempore libero autem expedita.
          </div>
        </div>
        <div className="button-section d-flex justify-content-around">
          <button
            id={this.state.prev}
            onClick ={this.handlePreviews}
            className="btn preview d-none"
          >
            Previews
          </button>
          <button id={this.state.next} onClick={this.handleNext} className="btn next">
            Next
          </button>
        </div>
      </>
    );
  }
}

export default Test;

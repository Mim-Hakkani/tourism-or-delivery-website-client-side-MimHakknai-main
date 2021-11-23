import React from 'react';

const Banner = () => {
    return (
        <div>
                        <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">

    <div className="carousel-item active" >
      <img 
      src="https://www.wallpapertip.com/wmimgs/9-90686_desktop-backgrounds-hd-travel.jpg" className="d-block w-100"
       alt="..." 
       style={{height:'800px'}}/>
    </div>
    <div className="carousel-item">
      <img 
      src="https://wallpapershome.com/images/pages/pic_h/378.jpg"
       className="d-block w-100" 
       alt="..."
       style={{height:'800px'}}
        />
    </div>
    <div className="carousel-item">
      <img 
        src="https://wallpaperaccess.com/full/1510128.jpg" 
        className="d-block w-100" 
        alt="..." 
        style={{height:'800px'}}
     />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
};

export default Banner;
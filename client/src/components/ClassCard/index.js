import React from 'react';
import './classcard.css';

function ClassCard() {
  return(
    <div className="card my-card">
      <img src="https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/accounting.jpg?itok=e6oojtrF" 
      className="card-img-top" alt="Accounting" />
      <div className="card-body text-left">
        <h5 className="card-title">Virtual Environment</h5>
        <p className="card-text">INF 385T</p>
      </div>
    </div>
  )
}

export default ClassCard;
import React from 'react';


const Header = ({title, subtitle}) => (
<div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">{title}</h1>
        <p className="col-md-8 fs-4">{subtitle}</p>
      </div>
    </div>
)

export default Header
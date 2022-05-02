import React from 'react';
import Helmet from "react-helmet"

const PageTitle = ({title}) => {
  return (
    <Helmet><title>{title} - Gudam Ghor</title></Helmet>
  );

};

export default PageTitle;
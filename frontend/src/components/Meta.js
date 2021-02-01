import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywors' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
<<<<<<< HEAD
  title: 'Welcom to Galileo',
  keywords: 'Art, curated art, fine art',
  description: 'The most exclusive art, for your eyes only',
}
=======
  title: "Welcome to ProShop",
  keywords: "electronics, buy electronics, cheap electronics",
  description: "We sell the best products for cheap",
};
>>>>>>> development

export default Meta

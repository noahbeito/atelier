import React from 'react';





const ProductInfo = () => {

  render(
    <>
      <section>
        {/* This should condionally render the desciption for the current item.  If description is not there. The should be a "No current description available at this time". Also possible conditional rendering with the length of the text. With a show more/show less button if theres time. */}
        {/* This is where the random bit of text description from the Business Requirements will go */}
        <p>This is Americas finest tool set. Super sharp drill bits, long lasting batteries!</p>
        {/* <p> {product.text} </p> */}
      </section>
      <section>
        {/* This will be where the social media links go FB, TWITTER PINTRIST */}
      </section>
    </>
  )
}

export default ProductInfo;
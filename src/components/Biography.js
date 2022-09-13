import React from "react";
import "../styles/Biography.css";

const Biography = () => {
  return (
    <div className="biography">
      <div className="biography_text">
        <h1>Biography</h1>
        <p>A short account of Queen Elizabeth II’s Life</p>
      </div>
      <div className="row">
        <img className="img1" src="./images/Rectangle 6.png" alt="" />
        <img className="img2" src="./images/Rectangle 5.png" alt="" />
        <p>
          Elizabeth Alexandra Mary Windsor was born in Mayfair, London, as the
          first child of the Duke & Duchess of York (later King George VI and
          Queen Elizabeth). Her father acceded to the throne in 1936 upon the
          abdication of his brother, King Edward VIII, making Elizabeth the heir
          presumptive. She was educated privately at home and began to undertake
          public duties during the Second World War, serving in the Auxiliary
          Territorial Service.
        </p>
      </div>
      <div className="row">
        <img className="img3" src="./images/Rectangle 7.png" alt="" />
        <p>
          In November 1947, she married Philip Mountbatten, a former prince of
          Greece and Denmark, and their marriage lasted 73 years until his death
          in April 2021. They had four children: Charles III; Anne, Princess
          Royal; Prince Andrew, Duke of York; and Prince Edward, Earl of Wessex.
          Elizabeth II was Queen of the United Kingdom from 6 February 1952
          until her death in 2022. Her reign of 70 years and 214 days was the
          longest of any British monarch and the second-longest recorded of any
          monarch of a sovereign country. At the time of her death, Elizabeth
          was also Queen of 14 other Commonwealth realms in addition to the
          United Kingdom.
          <br />
          <br />
          <br />
          <span className="link">
            <b>
              <a href="#">Read more &#8594;</a>
            </b>
          </span>
        </p>
        <img className="img4" src="./images/Rectangle 8.png" alt="" />
      </div>
    </div>
  );
};

export default Biography;

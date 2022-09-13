import React from "react";
import "../styles/Timline.css";

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="timeline_text">
        <h1>Timeline</h1>
        <b>
          <a href="#">See all &#8594;</a>
        </b>
      </div>
      <p>
        Key dates in the life of the Queen, from her birth in April 1926 to her
        death in September 2022
      </p>
      <div className="timeline_row">
        <div className="image1">
          <img src="./images/Rectangle 6.png" alt="" />
          <div className="timeline_row_text">
            <h3>1926</h3>
            <p>
              On the 21st of April, 1926, Princess Elizabeth Alexandra Mary
              Windsor is born at 2.40am at 17 Bruton Street, London, her
              maternal grandparents’ house. It was home to her parents,
              Elizabeth and Albert, Duke of York, the second son of King George
              V and Queen Mary. She was third in line to the throne behind her
              father and Edward, Prince of Wales.
            </p>
          </div>
        </div>
        <div className="image1">
          <img src="./images/Rectangle 2.png" alt="" />
          <div className="timeline_row_text">
            <h3>1920s</h3>
            <p>
              In August 1930, Elizabeth’s sister, Princess Margaret Rose, is
              born. On the 20th of January 1936, George V dies. Edward VIII
              becomes king. On the 10th of December 1936, Edward VIII abdicates
              so that he can marry the American divorcee Wallis Simpson.
              <br />
              In 1937, Elizabeth becomes a Girl Guide at the age of 11.
            </p>
          </div>
        </div>
        <div className="image1">
          <img src="./images/Rectangle 3.png" alt="" />
          <div className="timeline_row_text">
            <h3>1930s</h3>
            <p>
              On the 13th of October, 1940, Elizabeth makes her first broadcast
              to the nation. On the 21st of April 1942, on her 16th birthday,
              Elizabeth carries out her first public engagement when she
              inspects the Grenadier Guards, of which she had been appointed
              colonel-in-chief. In 1944, she receives her first corgi, Susan, as
              an 18th birthday present.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

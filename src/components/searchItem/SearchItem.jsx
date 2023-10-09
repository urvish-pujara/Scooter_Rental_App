import "./searchItem.css";
import axios from "axios";
const SearchItem = ({ photo, location, cancel, access, condition, rating, price }) => {
  const messageOwner = () => {
    const authId = '....';
    const authToken = '....';
    const fromNumber = '+919924154863';
    const toNumber = '+918160148893';
    const messageText = 'Hello, this is sample text';
    const plivoUrl = 'https://api.plivo.com/v1/Account/' + authId + '/Message/';

    const data = {
      src: fromNumber,
      dst: toNumber,
      text: messageText,
      url: 'https://api.plivo.com/sms_status/',
    };

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      auth: {
        username: authId,
        password: authToken,
      },
    };

    axios
      .post(plivoUrl, data, config)
      .then((response) => {
        console.log('Message sent successfully:', response.data);
        // Handle the response as needed
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        // Handle the error as needed
      });
    alert("You will soon get the message regarding availability.")
  }
  function makePlivoCall() {
    const authId = '....';
    const authToken = '....';
    const toNumber = '+12025551111';
    const fromNumber = '+12025550000';
    const answerUrl = 'https://s3.amazonaws.com/static.plivo.com/answer.xml';
    const plivoUrl = `https://api.plivo.com/v1/Account/${authId}/Call/`;
  
    const data = {
      to: toNumber,
      from: fromNumber,
      answer_url: answerUrl,
      answer_method: 'GET',
    };
  
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      auth: {
        username: authId,
        password: authToken,
      },
    };
  
    axios
      .post(plivoUrl, data, config)
      .then((response) => {
        console.log('Call initiated successfully:', response.data);
        // Handle the response as needed
      })
      .catch((error) => {
        console.error('Error initiating call:', error);
        // Handle the error as needed
      });
  }
  return (
    <div className="searchItem">
      <img
        src={photo}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{location}</h1>
        {/* <span className="siDistance">500m from center</span> */}
        <span className="siTaxiOp">{access}</span>
        <span className="siSubtitle">
          {/* Studio Apartment with Air conditioning */}
        </span>
        <span className="siFeatures">
          {/* Entire studio • 1 bathroom • 21m² 1 full bed */}
        </span>
        <span className="siCancelOp">{cancel} </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>{condition}</span>
          <button>{rating}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">{price}</span>
          {/* <span className="siTaxOp">Includes taxes and fees</span> */}
          <button className="siCheckButton" onClick={messageOwner}
          >See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;

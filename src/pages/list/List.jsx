import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Purpose</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Booking Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max deposit 
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per hour</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                {/* <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div> */}
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem photo={'data:image/jpeg;base64,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'}
             location={'Old Boys Hostel E - 328 [Urvish Pujara]'}
             access={'Open to all'}
             cancel={'Deposit Rs. 1000'}
             condition={'Excellent'}
             rating={'8.9'}
              price={'Rs. 79 per hour'}
              />
            <SearchItem photo={'data:image/jpeg;base64,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'}
             location={'Parijat nivaas 420 [Mitul Garg]'}
             access={'Reserved for clubs and campus life activities'}
             cancel={'Free cancellation'}
             condition={'Excellent'}
             rating={'9.8'}
              price={'Rs. 43 per hour'}
             />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;

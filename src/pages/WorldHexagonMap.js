import React, { useState } from 'react';
import "./WorldHexagonMap.css";

const WorldHexagonMap = () => {
  const [isDashboardClicked, setIsDashboardClicked] = useState(false);
  const [displayDashboardPage, setDisplayDashboardPage] = useState(false);

  const handleDashboardClick = () => {
    setIsDashboardClicked(true);
    setDisplayDashboardPage(true);
  };
  return (
    <div className="world-hexagon-map">
      <div className="widget-l-size-timeline-cha">
        <div className="info">
          <div className="value">
            <div className="value1">
              <div className="title">Sales Figures</div>
              <div className="value2">$10,430</div>
            </div>
          </div>
        </div>
        <div className="graph">
          <div className="chart">
            <div className="column" />
            <div className="column1" />
            <div className="column2" />
            <div className="column3" />
            <div className="column4" />
            <div className="column5" />
            <div className="column4" />
            <div className="column7" />
            <div className="column8" />
            <div className="column8" />
            <div className="column3" />
            <div className="column3" />
            <div className="column7" />
            <div className="column3" />
            <div className="column14" />
            <div className="column15" />
            <div className="column16" />
            <div className="column17" />
            <div className="column15" />
            <div className="column19" />
            <div className="column20" />
            <button className="column21" />
            <div className="column22" />
            <div className="column23" />
            <div className="column24" />
            <div className="column25" />
            <div className="column19" />
            <div className="column27" />
            <div className="column27" />
            <div className="column29" />
            <div className="column27" />
            <div className="column17" />
            <div className="column32" />
            <div className="column15" />
            <div className="column15" />
            <div className="column17" />
            <div className="column15" />
            <div className="column14" />
            <div className="column15" />
            <div className="column16" />
            <div className="column17" />
            <div className="column15" />
            <div className="column15" />
            <div className="column43" />
            <div className="column32" />
            <div className="column16" />
            <div className="column16" />
            <div className="column" />
            <div className="column1" />
            <div className="column2" />
            <div className="column3" />
            <div className="column51" />
            <div className="column51" />
            <div className="column53" />
            <div className="column51" />
            <div className="column55" />
            <div className="column56" />
            <div className="column16" />
            <div className="column16" />
            <div className="column55" />
            <div className="column16" />
            <div className="column61" />
            <div className="column16" />
            <div className="column14" />
            <div className="column55" />
            <div className="column55" />
            <div className="column55" />
            <div className="column55" />
            <div className="column16" />
            <div className="column69" />
            <div className="column69" />
            <div className="column71" />
            <div className="column72" />
          </div>
          <div className="line">
            <div className="bg" />
            <div className="cian" />
            <div className="yellow" />
          </div>
        </div>
      </div>
      <div className="navigation-bar">
        <div className="background" />
        <div className="search">
          <div className="input" />
          <img className="icon" alt="" src="../icon.svg" />
        </div>
        <div className="tab" />
        <div className="menu">
          <div className="label">Statistics</div>
          <div className="label1">Overview</div>
          <div>
          <button onClick={handleDashboardClick} className="label">Dashboard</button>
          {isDashboardClicked && displayDashboardPage && <DashboardPage />}
          </div>
         
          <div className="label">Analytics</div>
        </div>
        <img className="profile-icon" alt="" src="../profile.svg" />
        <img className="option-icon" alt="" src="../option.svg" />
        <div className="logo">
          <div className="name">WASSERSTOFF</div>
        </div>
      </div>
      <img className="wstf-logo-1-icon" alt="" src="../wstflogo-1.svg" />
      <div className="footer">
        <div className="background" />
        <b className="orion-data-visualisation">Orion data visualisation</b>
        <b className="b">2019</b>
      </div>
      <div className="side-indicators">
        <div className="informer-info-with-icon">
          <img className="icon1" alt="" src="../icon1.svg" />
          <div className="info1">
            <div className="title1">Total earning</div>
            <div className="amount">
              <div className="value3">540,549</div>
              <div className="indicator">
                <img className="up-icon" alt="" src="../up.svg" />
                <div className="div">145</div>
              </div>
            </div>
          </div>
        </div>
        <div className="informer-info-with-icon">
          <img className="icon1" alt="" src="../icon2.svg" />
          <div className="info1">
            <div className="title1">Sales</div>
            <div className="amount">
              <div className="value3">1,205,677</div>
              <div className="indicator">
                <img className="up-icon" alt="" src="../up.svg" />
                <div className="div">145</div>
              </div>
            </div>
          </div>
        </div>
        <div className="informer-info-with-icon">
          <img className="icon1" alt="" src="../icon3.svg" />
          <div className="info1">
            <div className="title1">Purchase</div>
            <div className="amount">
              <div className="value3">48,430,039</div>
              <div className="indicator">
                <img className="up-icon" alt="" src="../up.svg" />
                <div className="div">145</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="widget-m-size-big-circle-c">
        <div className="chart1">
          <div className="percent">
            <span className="span">27</span>%
          </div>
          <img className="background-icon" alt="" src="../background.svg" />
          <img className="progress-icon" alt="" src="../progress.svg" />
        </div>
        <div className="info4">
          <div className="amount3">92,980</div>
          <div className="detail">Active users</div>
        </div>
      </div>

      <div className="widget-m-size-big-circle-c1">
        <div className="chart1">
          <div className="percent">
            <span className="span">67</span>%
          </div>
          <img className="background-icon" alt="" src="../background.svg" />
          <img className="progress-icon1" alt="" src="../progress1.svg" />
          </div>
        <div className="info4">
          <div className="amount3">22,652</div>
          <div className="detail">New users</div>
        </div>
      </div>


      <img className="hex-map-icon" alt="" src="../hex-map.svg" />
      <div className="map-pin-pin-with-name">
        <div className="tooltip">
          <img className="indicator-icon" alt="" src="../indicator.svg" />
          <div className="info1">
            <div className="title4">Chicago</div>
            <div className="amount5">98,320,300</div>
          </div>
        </div>
        <img className="arrow-icon" alt="" src="../arrow.svg" />
      </div>
      <div className="map-pin-pin-with-name1">
        <div className="tooltip">
          <img className="indicator-icon" alt="" src="../indicator1.svg" />
          <div className="info1">
            <div className="title4">Manaus</div>
            <div className="amount5">12,320,300</div>
          </div>
        </div>
        <img className="arrow-icon" alt="" src="../arrow.svg" />
      </div>
      <div className="map-pin-pin-with-name2">
        <div className="tooltip">
          <img className="indicator-icon" alt="" src="../indicator2.svg" />
          <div className="info1">
            <div className="title4">Berlin</div>
            <div className="amount5">76,541,106</div>
          </div>
        </div>
        <img className="arrow-icon" alt="" src="../arrow.svg" />
      </div>
      <div className="map-pin-pin-with-name3">
        <div className="tooltip">
          <img className="indicator-icon" alt="" src="../indicator3.svg" />
          <div className="info1">
            <div className="title4">Giza</div>
            <div className="amount5">10,547,980</div>
          </div>
        </div>
        <img className="arrow-icon" alt="" src="../arrow.svg" />
      </div>
      <div className="map-pin-pin-with-name4">
        <div className="tooltip">
          <img className="indicator-icon" alt="" src="../indicator4.svg" />
          <div className="info1">
            <div className="title4">Shanghai</div>
            <div className="amount5">239,570,110</div>
          </div>
        </div>
        <img className="arrow-icon" alt="" src="../arrow.svg" />
      </div>
      <div className="map-pin-pin-with-name5">
        <div className="tooltip">
          <img className="indicator-icon" alt="" src="../indicator5.svg" />
          <div className="info1">
            <div className="title4">Queensland</div>
            <div className="amount5">6,097,321</div>
          </div>
        </div>
        <img className="arrow-icon" alt="" src="../arrow.svg" />
      </div>
      <div className="footer">
        <div className="background" />
        <b className="orion-data-visualisation">Orion data visualisation</b>
        <b className="b">2022</b>
      </div>
      <div className="amount11">2,431,340</div>
      <div className="title10">
        <div className="value3">All users</div>
        <div className="detail2">
          <b className="detail3">Detail</b>
          <img className="arow-icon" alt="" src="../arow.svg" />
        </div>
      </div>
      <div className="wstf-front-end-hackathon">WSTF FRONT-END HACKATHON</div>
    </div>
  );
};

export default WorldHexagonMap;

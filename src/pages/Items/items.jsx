import React, { useState } from "react";

import "./items.css";

const Items = () => {
  const [selectedSegment, setSelectedSegment] = useState(null);

  // Function to handle segment selection
  const handleSegmentClick = (segment) => {
    setSelectedSegment(segment);
  };

  return (
    <div className="items-sect">
      <div className="items-seg">
        <div
          className={`items-items ${
            selectedSegment === "mc150" ? "selected" : ""
          }`}
          onClick={() => handleSegmentClick("mc150")}
        >
          <span>BİMED MC-150</span>
          <br />
          <span>Dermatology</span>
        </div>
        <div
          className={`items-items ${
            selectedSegment === "mc120" ? "selected" : ""
          }`}
          onClick={() => handleSegmentClick("mc120")}
        >
          <span>BİMED MC-120</span>
          <br />
          <span>Gynecology</span>
        </div>
        <div
          className={`items-items ${
            selectedSegment === "mc120-A" ? "selected" : ""
          }`}
          onClick={() => handleSegmentClick("mc120-A")}
        >
          <span>BİMED MC-120-A</span>
          <br />
          <span>Gynecology</span>
        </div>
        <div
          className={`items-items ${
            selectedSegment === "Universal" ? "selected" : ""
          }`}
          onClick={() => handleSegmentClick("Universal")}
        >
          <span>UNIVERSAL</span>
          <br />
          <span>Ophthalmology</span>
        </div>
      </div>
      {selectedSegment && (
        <div className="item-details">
          {selectedSegment === "mc150" && (
            <div className="list-products ">
              <div>
                {" "}
                <span className="title-4-product">BİMED MC-150 </span>
              </div>
              <div className="general-items">
                <div>
                  {" "}
                  <p>
                    Through its multi direction triggering mechanism, the BIMED
                    MC-150 Cryoset, the choice of the dermatologists, can also
                    be handled comfortably with the left hand. Its stainless
                    steel body and ergonomic design provides the utmost reliable
                    and comfortable usage. Standard accessories featured with
                    MC-150 Cryoset are offered to consumers generously in a
                    custom manufactured case for storage and carriage. There are
                    many spraying and contacting probe options to choose from.
                    The transparent cryo plates with various diameters that are
                    used to avoid epithelization optimize the application area
                    without interrupting the field of vision and provide ease of
                    handle by its delicate structure.
                  </p>
                </div>
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "/assets/mc150.png"}
                    className="img-itesss"
                    alt=""
                  />
                </div>
              </div>
            </div>
          )}
          {selectedSegment === "mc120" && (
            <>
              <div>
                {" "}
                <span className="title-4-product">BİMED MC-120</span>
              </div>
              <div>
                <div className="general-items">
                  <div>
                    {" "}
                    <p>
                      {" "}
                      The BIMED MC-120 cyro device, used by gynecologists for
                      many years with satisfaction, offers ease of handle by its
                      distinguished ergonomic design with its perfect fit for
                      hands. The user does not have to keep pressing on the
                      trigger due to the trigger stabilizing system. The
                      defrosting procedure actualizes in seconds with the help
                      of the thermal system. The gold plated probe tips will
                      serve you for years without oxidation. It is offered with
                      its custom-made bag to store and carry with all of its
                      accessories.
                    </p>
                  </div>
                  <div>
                    <img
                      src={process.env.PUBLIC_URL + "/assets/mc120.png"}
                      className="img-itesss"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </>
          )}
          {selectedSegment === "mc120-A" && (
            <div>
              <div>
                {" "}
                <span className="title-4-product">BİMED MC-120-A</span>
              </div>
              <div className="general-items">
                <div>
                  <p>
                    The BIMED MC-120A cyro device, used by gynecologists for
                    many years with satisfaction, offers ease of handle by its
                    distinguished ergonomic design with its perfect fit for
                    hands. The user does not have to keep pressing on the
                    trigger due to the trigger stabilizing system. The
                    defrosting procedure actualizes in seconds with the help of
                    the thermal system. The gold plated probe tips will serve
                    you for years without oxidation. It can be carried to needed
                    locations in clinics with its multi-functional cart stand
                    and its special design keeps the cryo cylinder hidden.
                  </p>
                </div>
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "/assets/mc120-A.png"}
                    className="img-itesss"
                    alt=""
                  />
                </div>
              </div>
            </div>
          )}
          {selectedSegment === "Universal" && (
            <div>
              <div>
                {" "}
                <span className="title-4-product">Universal</span>
              </div>
              <div className="general-items">
                <div>
                  <p>
                    The BIMED Universal cryo device, which is a device of choice
                    in ophthalmology applications, keeps the operating pressure
                    under control with the help of a built-in manometer and
                    regulation system. Its superb performance and defrosting
                    speed minimizes the duration of the medical intervention.
                    Various probe options provide a wide spectrum of usage. It
                    can be carried to needed locations in clinics with its
                    multi-functional cart stand and its special design keeps the
                    cryo cylinder hidden.
                  </p>
                </div>
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "/assets/universsal.png"}
                    className="img-itesss"
                    alt=""
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Items;

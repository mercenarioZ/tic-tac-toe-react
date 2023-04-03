import React from "react";
import './ResetBtn.css'

function ResetBtn({resetBox}) {
      return (
            <button className="rs-btn"
            onClick={resetBox}>
                  Reset
            </button>
      );
}

export default ResetBtn;
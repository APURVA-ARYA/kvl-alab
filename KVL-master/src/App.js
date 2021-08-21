import React from 'react'
import './App.css'
import pic from './img/KVL.jpg'
import './index.css'
import a from './perform'
import perform from './perform'
const App = () => {
  return (
    <>
     <div id="whole_body" className="c36">
        <div className="c1">
          Experiment: Verification of Kirchoff's Voltage Law
        </div>
        <form name="f1" id="f1">
          <div className="c28">
            <br />
            <div id="main_circuit" className="c13">
              <img src={pic } className="c2" alt="pic" />
              <input type="number" name="r1" defaultValue={100} id="r1" className="c3" />
              <input type="number" name="r2" defaultValue={150} id="r2" className="c4" />
              <input type="number" name="r3" defaultValue={200} id="r3" className="c5" />
              <input type="number" name="v2" defaultValue={110} id="v2" className="c7" />
              <input type="number" name="v1" defaultValue={220} id="v1" className="c8" />
              <input type="number" name="V1" defaultValue={0} id="V1" className="c9" readOnly="readonly" />
              <input type="number" name="V2" defaultValue={0} id="V2" className="c10" readOnly="readonly" />
              <input type="number" name="V3" defaultValue={0} id="V3" className="c011" readOnly="readonly" />
              <input type="number" name="V4" defaultValue={0} id="V4" className="c012" readOnly="readonly" />
              <input type="number" name="V5" defaultValue={0} id="V5" className="c013" readOnly="readonly" />
            </div>
            <div className="c27">
              <div className="c20">
                <strong>Control Panel</strong>
              </div>
              <br />
              <div id="tab-content1" className="animated fadeIn">
                <b>Input the values of Voltage sources &amp; Resistances </b>
                <br /> Then click on Run.<p />
                <p className="c22">
                  <input type="button" className="greenbtn c21" defaultValue="Runme" onClick={perform}/>
                  </p>
              </div>
            </div>
          </div>
          <div className="c29" />
          <div id="observation" className="c33">
            <h3 className="c30">Observation Table</h3>
            <table cellSpacing={0} className="c32" align="center">
              {/* cellspacing='0' is important, must stay */}
              <tbody><tr>
                  <th rowSpan={2}>SL No.</th>
                  <th colSpan={5}>Voltmeter Readings</th>
                  <th colSpan={2}>Verification of KVL </th>
                </tr>
                <tr>
                  <th>V1</th>
                  <th>V2</th>
                  <th>V3</th>
                  <th>V4</th>
                  <th>V5</th>
                  <th>V2+V4 </th>
                  <th>-V3+V4 </th>
                </tr>
                <tr>
                  <td><strong>1</strong></td>
                  <td><input type="number" name="v11" defaultValue id="tr1" className="c31" readOnly="readonly" /></td>
                  <td><input type="number" name="v21" defaultValue id="tr2" className="c31" readOnly="readonly" /></td>
                  <td><input type="number" name="v31" defaultValue id="tr3" className="c31" readOnly="readonly" /></td>
                  <td><input type="number" name="v41" defaultValue id="tr4" className="c31" readOnly="readonly" /></td>
                  <td><input type="number" name="v51" defaultValue id="tr5" className="c31" readOnly="readonly" /></td>
                  <td><input type="number" name="k11" defaultValue id="tr6" className="c31" readOnly="readonly" /></td>
                  <td><input type="number" name="k21" defaultValue id="tr7" className="c31" readOnly="readonly" /></td>
                </tr>
                {/* Table Row */}
                <tr>
                  <td><strong>2</strong></td>
                  <td><input type="number" name="v12" defaultValue id="tr1" className="c31" readOnly="readonly" /></td>
                  <td><input type="number" name="v22" defaultValue id="tr2" className="c31" readOnly="readonly" /></td>
                  <td><input type="number" name="v32" defaultValue id="tr3" className="c31" readOnly="readonly" /></td>
                  <td><input type="number" name="v42" defaultValue id="tr4" className="c31" readOnly="readonly" /></td>
                  <td><input type="number" name="v52" defaultValue id="tr5" className="c31" readOnly="readonly" /></td>
                  <td><input type="number" name="k12" defaultValue id="tr6" className="c31" readOnly="readonly" /></td>
                  <td><input type="number" name="k22" defaultValue id="tr7" className="c31" readOnly="readonly" /></td>
                </tr>
                <tr>
                  <td><strong>3</strong></td>
                  <td><input type="number" name="v13" defaultValue id="tr1" className="c31" readOnly="readonly" /></td>
                  <td><input type="number" name="v23" defaultValue id="tr2" className="c31" readOnly="readonly" /></td>
                  <td><input type="number" name="v33" defaultValue id="tr3" className="c31" readOnly="readonly" /></td>
                  <td><input type="number" name="v43" defaultValue id="tr4" className="c31" readOnly="readonly" /></td>
                  <td><input type="number" name="v53" defaultValue id="tr5" className="c31" readOnly="readonly" /></td>
                  <td><input type="number" name="k13" defaultValue id="tr6" className="c31" readOnly="readonly" /></td>
                  <td><input type="number" name="k23" defaultValue id="tr7" className="c31" readOnly="readonly" /></td>
                </tr>
                <tr>
                  <td><strong>4</strong></td>
                  <td><input type="number" name="v14" defaultValue id="tr1" className="c31" readOnly="readonly" /></td>
                  <td><input type="number" name="v24" defaultValue id="tr2" className="c31" readOnly="readonly" /></td>
                  <td><input type="number" name="v34" defaultValue id="tr3" className="c31" readOnly="readonly" /></td>
                  <td><input type="number" name="v44" defaultValue id="tr4" className="c31" readOnly="readonly" /></td>
                  <td><input type="number" name="v54" defaultValue id="tr5" className="c31" readOnly="readonly" /></td>
                  <td><input type="number" name="k14" defaultValue id="tr6" className="c31" readOnly="readonly" /></td>
                  <td><input type="number" name="k24" defaultValue id="tr7" className="c31" readOnly="readonly" /></td>
                </tr>
                <tr>
                  <td><strong>5</strong></td>
                  <td><input type="number" name="v15" defaultValue id="tr1" className="c31" readOnly="readonly" /></td>
                  <td><input type="number" name="v25" defaultValue id="tr2" className="c31" readOnly="readonly" /></td>
                  <td><input type="number" name="v35" defaultValue id="tr3" className="c31" readOnly="readonly" /></td>
                  <td><input type="number" name="v45" defaultValue id="tr4" className="c31" readOnly="readonly" /></td>
                  <td><input type="number" name="v55" defaultValue id="tr5" className="c31" readOnly="readonly" /></td>
                  <td><input type="number" name="k15" defaultValue id="tr6" className="c31" readOnly="readonly" /></td>
                  <td><input type="number" name="k25" defaultValue id="tr7" className="c31" readOnly="readonly" /></td>
                </tr>
              </tbody></table>
            <br />
            <br />
          </div>
          <div className="c35">
            {/* <input type="button" onClick={window.print} defaultValue="Click here to print" className="bluebtn c34" /> */}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </form>
      </div>
   {/* <a/> */}
    </>
  )
}

export default App

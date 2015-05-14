/**                                                        
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var _     = require("underscore");
var Modal = require("react-bootstrap/Modal");
var Accordion = require("react-bootstrap/Accordion");
var Button = require("react-bootstrap/Button");
var ValueGrid = require('./ValueGrid.jsx');
var ReactTransitionGroup = React.addons.TransitionGroup;
var props = {};

var ValueModal = React.createClass({

  getInitialState: function() {
    return {
      values : [],
      numCols : ""
    };
  },

  componentWillReceiveProps: function(nextProps) {
  this.setState({
    values : nextProps.values,
    numCols : nextProps.numCols
  });
},


  render: function() {
    return (
      <Modal props={props} bsStyle='primary' title='Value Grid' animation={false}>
        <div className='modal-body'>
     
          <p>Geotrellis value grid</p>

          <div>
          <ValueGrid values = {this.props.values} numCols = {this.props.numCols}/>
          </div>

          <hr />

          </div>
        <div className='modal-footer'>
        <Button onClick={this.props.onRequestHide}>Close</Button>
       </div>
    </Modal>

  //     <Accordion>
  //   <Panel header='Collapsible Group Item #1' eventKey='1'>
  //     Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
  //   </Panel>
  //   <Panel header='Collapsible Group Item #2' eventKey='2'>
  //     Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
  //   </Panel>
  //   <Panel header='Collapsible Group Item #3' eventKey='3'>
  //     Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
  //   </Panel>
  // </Accordion>
  // <Accordion>
  // </Accordion>
    );
  }
});

module.exports = ValueModal;
/**                                                        
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var _     = require("underscore");
var Modal = require("react-bootstrap/Modal");
var Button = require("react-bootstrap/Button");
var ValueGrid = require('./ValueGrid.jsx');
var ReactTransitionGroup = React.addons.TransitionGroup;
var props = {};

var ValueModal = React.createClass({

  getInitialState: function() {
    console.log('initial state', this.props)
    return {
      values : []
    };
  },

  componentDidMount: function() {
    $.get(this.props.source, function(props) {
      if (this.isMounted()) {
        //console.log('props: ', props)
        this.setState({
          values : props.values
        });
      }
    }.bind(this));
  },

  componentWillReceiveProps: function(nextProps) {
    console.log('recieved props &&&', nextProps);
  this.setState({
    values : nextProps
  });
},

  // shouldComponentUpdate: function(nextProps, nextState) {
  //   console.log('updated!!!!!!!!!!!!!!!!!!!!!!!!!!!! nestprops', nextProps)
  //   console.log('updated!!!!!!!!!!!!!!!!!!!!!!!!!!!! nextState', nextState)
  // return nextProps.id !== this.props.id;
  // },

  render: function() {
    return (
      <Modal props={props} bsStyle='primary' title='Modal heading' animation={false}>
        <div className='modal-body'>
     
          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

          <div>
          <ValueGrid values = {this.props.values} />
          </div>

          <hr />

          </div>
        <div className='modal-footer'>
          <Button onClick={this.props.onRequestHide}>Close</Button>
        </div>
      </Modal>
    );
  }
});

module.exports = ValueModal;
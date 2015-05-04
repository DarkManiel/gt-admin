/**                                                        
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var _     = require("underscore");
var Modal = require("react-bootstrap/Modal");
var Button = require("react-bootstrap/Button");
var Table = require("react-bootstrap/Table");
var Col = require("react-bootstrap/Col");
var Row = require("react-bootstrap/Row");

var ValueGrid = React.createClass({
	getInitialState: function() {
    return {
      values : []
    };
  },
	
	render: function() {

	var css = {
		'width' : '100%'};
    //var valGrid = this.valuegrid;
    console.log('state ', this.state)
    console.log('props', this.props)
    console.log('this ', this)

    var gridTh = _.map([1,2,3,4], function(val){
    	return <th>{val}</th>;
    });

    var gridTr = _.map([5,6,7,8], function(){
    	return <tr>{ gridTh }</tr>
    });
    return (
    			<Table striped bordered condensed hover style = {css}>
    <tbody>
      { gridTr }
    </tbody>
  </Table>
    	    );
  }
});

module.exports = ValueGrid;
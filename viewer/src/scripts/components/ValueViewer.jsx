/**                                                        
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var _     = require("underscore");

//var L = require('ValueViewer')
//require('style!leaflet/dist/leaflet.css')//add valueViewer css?

var ValueViewer = React.createClass({
	 
    createValueGrid : function (rows, cols, values){
        var i=0;
        var grid = document.createElement('table');
        console.log('grid is');
        console.log(grid);
        var centerRow = Math.floor(rows / 2);
        var centerCol = Math.floor(cols / 2);
        grid.className = 'valueGrid';
        grid.id = 'valueGrid';
        for (var r=0;r<rows;++r){
            var tr = grid.appendChild(document.createElement('tr'));
            for (var c=0;c<cols;++c){
                var cell = tr.appendChild(document.createElement('td'));
                cell.innerHTML = values[r*cols + c];
                if(r == centerRow && c == centerCol) {
                    cell.className = 'centerCell';
                }
            }
        }
        return grid;
    },
    //return {
        update : function(latlng) {
            $.ajax({
                url: gtUrl('layer/valuegrid'),
                data: { 'store' : layerViewer.getLayer().store,
                        'layer' : layerViewer.getLayer().name,
                        'lat': latlng.lat,
                        'lng': latlng.lng,
                        'size': 3 },
                dataType: "json",
                success: function(data) {
                    if(data.success) {
                        var d  = Math.floor(Math.sqrt(data.values.length))
                        var grid = createValueGrid(d,d,data.values);
                        $('#valueViewer').html("");
                        $('#valueViewer').append(grid);
                        valueViewer.updateSize();
                    } else {
                        // Display no success in div.
                        $('#valueViewer').html("");
                        $('#valueViewer').append(
                            $('<span class="label label-info">Could not get raster values. Is the Raster projection Web Mercator?</span>'));
                    }
                }
            });
        },
        updateSize : function() {
                console.log('updating SIZE!!!');
                if($('#valueGrid')) {
                $('#valueGrid').css({'height': ($('#valueGrid').width()) +'px'});
            }
        },
    
        render: function(){
        	//var grid = createValueGrid();
	return (
    // <table responsive>
    //   <thead>
    //     <tr> <th>'replace with calls to functions'</th> <th>Zoom</th><th>Band</th></tr>        
    //   </thead>
    //   <tbody> </tbody>
    // </table>

    <div id="valueViewer">
    <p class=".lead" >
                  </p>
                
            </div>
	  
      
		);
}
    });

module.exports = ValueViewer;
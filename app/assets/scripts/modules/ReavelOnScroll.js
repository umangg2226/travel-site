import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class ReavelOnScroll {
    constructor(els, offset) {
        this.itemsToReavel = els;
        this.offsetPercentage = offset;
        this.hideInitially();
        this.createWaypoints();
    }

    hideInitially() {
        this.itemsToReavel.addClass("reavel-item");
    }

    createWaypoints() {
        var that = this;
        this.itemsToReavel.each(function() {
            var currentitem = this;
            new Waypoint({
                element: currentitem,
                handler: function() {
                    $(currentitem).addClass("reavel-item--is-visible");
                },
                offset: that.offsetPercentage
            });
        });
    }
}

export default ReavelOnScroll;
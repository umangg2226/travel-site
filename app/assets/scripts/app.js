import MobileMenu from './modules/MobileMenu';
import ReavelOnScroll from './modules/ReavelOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';

var mobileMenu = new MobileMenu();
new ReavelOnScroll($(".feature-item"), "85%");
new ReavelOnScroll($(".testimonial"), "60%");
var stickyheader = new StickyHeader();
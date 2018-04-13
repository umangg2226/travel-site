import MobileMenu from './modules/MobileMenu';
import ReavelOnScroll from './modules/ReavelOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new ReavelOnScroll($(".feature-item"), "85%");
new ReavelOnScroll($(".testimonial"), "60%");
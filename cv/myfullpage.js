

$(document).ready(function() {
	$('#fullpage').fullpage({
		//Navigation
        //menu: false,
		verticalCentered: true,
        lockAnchors: false,
        anchors: ['me', 'work_experience', 'project_experience', 'skills', 'github', 'contact'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['me', 'work experience', 'project experience', 'skills', 'github', 'contact'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

		//Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: true,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

		//Design
        controlArrows: true,
        verticalCentered: true,
        resize : false,
        sectionsColor: ['#1bbc9b', '#1bbc9b', '#1bbc9b', '#1bbc9b', '#1bbc9b', '#1bbc9b'],
        //sectionsColor: ['#129DE7', '#129DE7', '#129DE7', '#129DE7'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide'
	});
});

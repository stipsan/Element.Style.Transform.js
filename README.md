Element.Style.Transform
=======================

Provides a cross browser way of letting you use the CSS3 transform property. 
Inspired by http://github.com/zachstronaut/jquery-css-transform

![Screenshot](http://s3.amazonaws.com/ember/LBO52pd4G2TEC7xnC1vWWigoE0PozCjG_o.png)


ie support isn't there yet
--------------------------

As this post explains near the end: http://www.zachstronaut.com/posts/2009/02/22/jquery-patch-css-transform.html
Using IEs matrix filter directly can make it possible to animate it.
However the Matrix Filter is anything but easy to wrap your head around: http://msdn.microsoft.com/en-us/library/ms533014(VS.85).aspx
So please be patient :)


How to Use
----------

	#JS
	$('box').set('transform', 'scale(2)')
	        .get('transform');           // Returns 'scale(2)'
			
	$('box').setTransform('rotate(15deg)')
	        .getTransform();              // Returns 'scale(2)'
			
`$('box').getStyle('transform');` unfortunately does not work. Neither does setStyle.
I haven't found a way to extend those methods to make it work cross browser engine yet.
So with those, you'll have to use the correct browser vendor prefixes.

	#JS
	$('box').getStyle('webkit-transform') // Safari and Chrome
	        .getStyle('moz-transform')    // Firefox
	        .getStyle('o-transform');      // Opera
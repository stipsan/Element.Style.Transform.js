/*
---

script: Element.Style.Transform.js

description: Provides a cross browser way of letting you use the CSS3 transform property. Inspired by http://github.com/zachstronaut/jquery-css-transform

license: MIT-style license

authors: Stian Didriksen

requires:
- core:1.2.4/Browser
- core:1.2.4/Element

provides: [Element.Style.Transform]

...
*/

Element.Properties.transform = {

	set: function(transform){
		var property = 'transform';
		if(Browser.Engine.webkit) property = 'WebkitTransform';
		if(Browser.Engine.gecko)  property = 'MozTransform';
		
		this.style[property] = transform;
		this.store('transform', transform);
	},

	get: function(){
		return this.retrieve('transform', 1);
	}

};

Element.implement({

	setTransform: function(value){
		return this.set('transform', value);
	},

	getTransform: function(){
		return this.get('transform');
	}

});
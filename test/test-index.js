import React from 'react';
import {
	renderIntoDocument,
	findRenderedDOMComponentWithClass
} from 'react-addons-test-utils';

var App = require('../components/App');
import { expect } from 'chai';

// import { App } from '../components/App';
// import { expect } from 'chai';


describe('App', function() {
	it('should have render a header with class name "Header2" ', function() {
		const component = renderIntoDocument(
			<Header2 />
		);
		const header = findRenderedDOMComponentWithClass(component, 'Header2')
		expect (header).to.be.ok;
	});
	

})

it('should get search result from search term');
it('should get No result when there is no data found in API')
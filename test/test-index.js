import React from 'react';
import {
	renderIntoDocument,
	findRenderedDOMComponentWithClass
}from 'react-addons-test-utils';
import { App } from '../components/App';
import { expect } from 'chai';


describe('App', function() {
	it('should have render a header with class name "Header" ', function() {
		const component = renderIntoDocument(
			<Header />
		);
		const header = findRenderedDOMComponentWithClass(component, 'Header')
		expect (header).to.be.ok;
	});
	

})

it('should get search result from search term');
it('should get No result when there is no data found in API')
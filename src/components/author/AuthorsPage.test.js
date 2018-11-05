import expect from 'expect';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';
import {AuthorsPage} from './AuthorsPage';
import {coursesPageProps} from '../../api/mockData';

const mockStore = configureMockStore();

describe('AuthorsPage Component', () => {
  let wrapper, store;

  beforeEach(() => {
    const initialState = {
        authors: [],
        courses: [],
        ajaxCallsInProgress: 0
    };
    store = mockStore(initialState.authors);

    wrapper = shallow(
      <AuthorsPage store={store}/>
    );

  it('should render h1', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });

  it('should render "Add Author"', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });

  it('should render AuthorList', () => {
    expect(wrapper.find('AuthorList').length).toEqual(1);
  });
});

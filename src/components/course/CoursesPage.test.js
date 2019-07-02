import expect from 'expect';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';
import {CoursesPage} from './CoursesPage';
import {coursesPageProps} from '../../api/mockData';

const mockStore = configureMockStore();

describe('CoursesPage Component', () => {
  let wrapper, store;

  beforeEach(() => {
    const initialState = {
        author: [],
        courses: [],
        ajaxCallsInProgress: 0
    };
    store = mockStore(initialState.courses);

    wrapper = shallow(
      <CoursesPage store={store} {...coursesPageProps}/>
    );
  });

  it('should render h1', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });

  it('should render "Add Coures"', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });

  it('should render CourseList', () => {
    expect(wrapper.find('CourseList').length).toEqual(1);
  });
});

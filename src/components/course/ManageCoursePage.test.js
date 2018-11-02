import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { ManageCoursePage } from './ManageCoursePage';

const props = {
  authors: [],
  actions: { saveCourse: () => { return Promise.resolve(); }},
  course: {id: '', watchHref: '', title: 'qwe', authorId: '', length: '', category: ''}
};

describe('Manage Course Page', () => {
  const wrapper = mount(<ManageCoursePage {...props} />);
  it('sets error message when trying to save empty title', () =>{
    const saveButton = wrapper.find('input').last();
    expect(saveButton.props().type).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });

  it('should render CourseForm', () => {
    expect(wrapper.find('CourseForm').length).toEqual(1);
  });
});

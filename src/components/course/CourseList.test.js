import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';
import CourseList from './CourseList';
import {courseListProps} from '../../api/mockData';

describe('CourseList Component', () => {
  const handleDelete = spy();
  const courseKeys = [ 'course1-software',
    'course1-python',
    'course1-js',
    'course1-RoR'
  ];
  const wrapper = shallow(
    <CourseList
      deleteCourse={handleDelete}
      {...courseListProps}/>
  );

  it('should render a table', () => {
    const table = wrapper.find('.table');
    expect(table.length).toBe(1);
    expect(wrapper.find('thead').length).toBe(1);
    expect(wrapper.find('tr').length).toBe(1);
    expect(wrapper.find('th').length).toBe(5);
  });

  it('should receive a list of courses as props', () => {
    const tbody = wrapper.find('tbody');
    const arr = wrapper.children('tbody').props().children;
    expect(wrapper.children('tbody').props().children.length).toEqual(4);
  });

  it('list items should contain keys', () => {
    const tbody = wrapper.find('tbody');
    expect(
      wrapper.children('tbody').props().children.map(node => node.key)
    ).toEqual(courseKeys);
  });

  it('should receive 2 props', () => {
    const deleteHandler = wrapper.find('tbody');
    expect(wrapper.props().children.length).toEqual(2);
  });
});

import expect, { createSpy, spyOn, isSpy } from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';
import CourseListRow from './CourseListRow';
import {
  CourseListRowProps,
  fakeCourseListRowProps,
  courseListProps
} from '../../api/mockData';

describe('CoursListRow Component', () => {
  const handleDelete = spy();
  const {course} = CourseListRowProps;
  const wrapper = shallow(
    <CourseListRow
      deleteCourse={handleDelete}
      {...CourseListRowProps}/>
  );

  it('should render a course table row', () => {
    expect(wrapper.find('tr').length).toEqual(1);
  });

  it('should render table data', () => {
    expect(wrapper.children('td').length).toEqual(6);
  });

  it('should contain an authorId', () => {
    expect(
      wrapper.children('td').map(node => node.text())
    ).toInclude(course.authorId);
  });

  it('should contain a category', () => {
    expect(
      wrapper.children('td').map(node => node.text())
    ).toInclude(course.category);
  });

  it('should contain a length', () => {
    expect(
      wrapper.children('td').map(node => node.text())
    ).toInclude(String(course.length));
  });

  it('should contain a Link', () => {
    expect(wrapper.children('td').find('Link').length).toEqual(1);
  });

  it('table data should contain a button',() => {
    expect(wrapper.children('td').find('.btn').length).toEqual(1);
  });

  it('td should contain <a/>', () => {
    expect(wrapper.children('td').find('a').text()).toEqual('Watch');
  });

  it('should trigger a deleteCourse click', () => {
    const deleteCourseButton = wrapper.children('td').find('button');
    const { courses } = courseListProps;
    deleteCourseButton.simulate('click', {
      e: {
        id: 'course1-software',
        title: 'course1'
      }
    });
    expect(handleDelete.calledOnce).toBeTruthy();

  });
});

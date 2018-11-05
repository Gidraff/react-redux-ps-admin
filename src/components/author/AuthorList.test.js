import expect, { createSpy, spyOn, isSpy } from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';
import AuthorList from './AuthorList';
import {AuthorListProps} from '../../api/mockData';

describe('AuthorList Component', () => {
  const handleDelete = spy();
  const AuthorsId = [ 'cory-house',
    'scott-allen',
    'dan-wahlin',
    'john-doe'
  ];
  const wrapper = shallow(
    <AuthorList
      deleteAuthor={handleDelete}
      {...AuthorListProps}/>
  );

  it('should render a table', () => {
    const table = wrapper.find('.table');
    expect(table.length).toBe(1);
    expect(wrapper.find('thead').length).toBe(1);
    expect(wrapper.find('tr').length).toBe(1);
    expect(wrapper.find('th').length).toBe(3);
  });

  it('should receive a list of courses as props', () => {
    expect(wrapper.children('tbody').props().children.length).toEqual(4);
  });

  it('list items should contain keys', () => {
    const tbody = wrapper.find('tbody');
    expect(
      wrapper.children('tbody').props().children.map(node => node.key)
    ).toEqual(AuthorsId);
  });

  it('should receive 2 props', () => {
    const deleteHandler = wrapper.find('tbody');
    expect(wrapper.props().children.length).toEqual(2);
  });
});

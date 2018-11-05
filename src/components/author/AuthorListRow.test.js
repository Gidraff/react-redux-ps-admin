import expect, { createSpy, spyOn, isSpy } from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';
import AuthorListRow from './AuthorListRow';
import {AuthorListRowProps} from '../../api/mockData';


describe('AuthorListRow Component', () => {
  const handleDelete = spy();
  const wrapper = shallow(
    <AuthorListRow
      deleteAuthor={handleDelete}
      {...AuthorListRowProps}/>
  );

  it('should render table row', () => {
    expect(wrapper.find('tr').length).toEqual(1);
  });

  it('should render table Data', () => {
    expect(wrapper.find('td').length).toEqual(4);
  });

  it('should render a delete button', () => {
    const deleteButton = wrapper.find('button');
    expect(deleteButton.length).toEqual(1);
    deleteButton.simulate('click');
    expect(handleDelete.called).toBeTruthy();
  });
});

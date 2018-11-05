import expect, { createSpy, spyOn, isSpy } from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';
import AuthorForm from './AuthorForm';
import {AuthorFormProps} from '../../api/mockData';

describe('AuthorForm Component', () => {
  const handleChange = spy();
  const handleSave = spy();

  const wrapper = shallow(
    <AuthorForm
      onChange={handleChange}
      onSave={handleSave}
      {...AuthorFormProps} />
  );
  const TextInput = wrapper.children('TextInput');
  const submitButton = wrapper.find('input[type="submit"]');

  it('should render a form', () => {
    const form = wrapper.find('form');
    expect(form.length).toEqual(1);
  });

  it('should render a h1', () => {
    const h1 = wrapper.find('h1');
    expect(h1.length).toEqual(1);
    expect(h1.text()).toEqual('Manage Author');
  });

  it('should render TextInputs', () => {
    expect(TextInput.first().props().name).toBe('firstName');
    expect(TextInput.last().props().name).toBe('lastName');
  });

  it('should trigger handleChange on firstName onChange', () => {
    TextInput.first().simulate(
      'change',
      {e: {
        name: 'firstName',
        value: 'John'
      }});
    expect(handleChange.called).toBeTruthy();
  });

  it('should trigger handleChange on lastName onChange', () => {
    TextInput.last().simulate(
      'change',
      {e: {
        name: 'firstName',
        value: 'John'
      }});
    expect(handleChange.called).toBeTruthy();
  });

  it('should render submit button', () => {
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.length).toEqual(1);
  });

  it('should trigger a handleSave  onClick', () => {
    submitButton.simulate('click');
    expect(handleSave.called).toBeTruthy();
  });
});

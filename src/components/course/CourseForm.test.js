import expect, { createSpy, spyOn, isSpy } from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';
import CourseForm from './CourseForm';
import {courseFormProps} from '../../api/mockData';



describe('CourseForm Component', () => {
  const handleSave = spy();
  const handleChange = spy();

  function setup(saving) {
    let props = {
      course: {}, saving: saving, errors: {} ,
      onSave: () => {},
      onChange: () => {}
    };
    return shallow(<CourseForm {...props}/>);
  }
  const wrapper = shallow(
    <CourseForm
      onChange={handleChange}
      onSave={handleSave}
      {...courseFormProps}
    />);


  it('should render a form and a h1', () => {
    expect(wrapper.find('form').length).toEqual(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Course');
  });

  it('should receive props', () => {
    expect(wrapper.props().children.length).toEqual(6);
  });

  it('should render 3 TextInput components', () => {
    expect(wrapper.find('TextInput').length).toEqual(3);
  });

  it('should render 1 SelectInput components', () => {
    expect(wrapper.find('SelectInput').length).toEqual(1);
  });

  it('should render a submit button', () => {
    expect(wrapper.find('input').last().props().type).toEqual('submit');
  });

  it('save button is labeled "Save" when not saving', () => {
    const wrapper = setup(false);
    expect(wrapper.find('input').props().value).toBe('Save');
  });

  it('ensure button is clicked once', () => {
    const saveButton = wrapper.find('input').last();
    saveButton.simulate('click');
    expect(saveButton.last().props().disabled).toEqual('saving');
    expect(saveButton.last().props().value).toEqual('Saving...');

  });

  it('should select author', () => {
    const select = wrapper.find('SelectInput').first();
    select.simulate('change', {e: { value: 'test-author'}});
    expect(handleChange.called).toBeTruthy();
  });

  it('should trigger callback on title change', () => {
    const title = wrapper.find('TextInput[name="title"]');
    title.simulate('change', {
      e: {name: 'test', value: 'testing value'}
    });
    expect(handleChange.called).toBeTruthy();
  });

  it('should trigger callback on category change', () => {
    const title = wrapper.find('TextInput[name="category"]');
    title.simulate('change', {
      e: {name: 'test', value: 'testing value'}
    });
    expect(handleChange.called).toBeTruthy();
  });
});

import React from 'react';
import {shallow} from 'enzyme';

import Button from './button';

describe('<Button />', () => {
    it('Should call props.onClick when the button is clicked', () => {
        const mockCallBack = jest.fn();

        const wrapper = shallow(<Button onClick={ mockCallBack }/>);
        wrapper.find('button').at(0).simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
});

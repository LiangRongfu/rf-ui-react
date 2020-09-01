import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './index';

export default {
    title: '组件/Button',
    component: Button
};

export const Text = () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
);

export const Emoji = () => (
    <Button onClick={action('clicked')}>Hello Storybook</Button>
)

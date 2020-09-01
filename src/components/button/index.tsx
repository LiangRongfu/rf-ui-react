import React, {
    ButtonHTMLAttributes,
    PropsWithChildren
} from 'react';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{};

const MyButton = styled.button({
    color: 'red'
})

function Button(props: PropsWithChildren<ButtonProps>) {
    const {children, ...rest} = props;
    return <MyButton {...rest}>{children}</MyButton>;
}

export default Button;
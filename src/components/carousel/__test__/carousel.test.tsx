import React from "react";
import { fireEvent, act, render as trender } from "@testing-library/react";
import { Carousel } from "../index";
import { render, unmountComponentAtNode } from "react-dom";

const testAutoplay = function() {
    return (
        <Carousel height={300} autoplayDelay={1000}>
            <span id="test1">1</span>
            <span id="test2">2</span>
            <span id="test3">3</span>
        </Carousel>
    );
};

const testReverseAuto = function() {
    return (
        <Carousel height={300} autoplayDelay={1000} autoplayReverse={true}>
            <span id="test1">1</span>
            <span id="test2">2</span>
            <span id="test3">3</span>
        </Carousel>
    );
};

const testHeight = function() {
    return (
        <Carousel height={100} autoplay={false}>
        <span id="test1">1</span>
        <span id="test2">2</span>
        <span id="test3">3</span>
        </Carousel>
    );
};

const testDefaultIndex = function() {
    return (
        <Carousel height={100} autoplay={false} defaultIndex={2}>
        <span id="test1">1</span>
        <span id="test2">2</span>
        <span id="test3">3</span>
        </Carousel>
    );
};

const testRadioColor = function() {
    return (
        <div>
        <Carousel height={100} autoplay={false} radioAppear="positive">
            <span id="test1">1</span>
            <span id="test2">2</span>
            <span id="test3">3</span>
        </Carousel>
        <Carousel height={100} autoplay={false}>
            <span id="test1">1</span>
            <span id="test2">2</span>
            <span id="test3">3</span>
        </Carousel>
        <Carousel height={100} autoplay={false} radioAppear="purple">
            <span id="test1">1</span>
            <span id="test2">2</span>
            <span id="test3">3</span>
        </Carousel>
        </div>
    );
};

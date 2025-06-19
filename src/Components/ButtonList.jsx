import React from "react";
import Button from "./Button";

const ButtonList = () => {
    return(
        <div className="flex">
            <Button name="All"/>
            <Button name="Songs"/>
            <Button name="Gaming"/>
            <Button name="Cricket"/>
            <Button name="Live"/>
            <Button name="Coding"/>
            <Button name="Football"/>
            <Button name="Cooking"/>
            <Button name="Movies"/>
            <Button name="Comedy"/>
            <Button name="Travel"/>
            <Button name="Cinema"/>
            <Button name="War"/>
        </div>
    );
}

export default ButtonList;
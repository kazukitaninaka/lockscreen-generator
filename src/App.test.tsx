import React from "react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { mount, shallow } from "enzyme";
import App from "./App";
import Preview from "./components/Preview";
import TextInput from "./components/TextInput";
import ChooseColor from "./components/ChooseColor";
import ModifyFontSize from "./components/ModifyFontSize";

describe("App", () => {
  it("renders all components", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.children().length).toBe(3);
    expect(wrapper.find(ChooseColor).length).toBe(1);
    expect(wrapper.find(TextInput).length).toBe(1);
    expect(wrapper.find(Preview).length).toBe(1);
  });

  it("renders ModifyFontSize in Preview", () => {
    const wrapper = shallow(<Preview />);
    expect(wrapper.find(ModifyFontSize).length).toBe(1);
  });

  it("correctly update color prop on change", () => {
    const wrapper = mount(<App />);
    const appChildren = wrapper.children();
    const colorButton = appChildren.find("input[type='radio']#beige");

    expect(colorButton).toHaveLength(1);
    expect(wrapper.find("ChooseColor").prop("selectedColor")).toBe("basic");
    colorButton.simulate("change");
    expect(wrapper.find("ChooseColor").prop("selectedColor")).toBe("beige");
  });

  it("correctly update textarea prop on change", () => {
    const wrapper = mount(<App />);
    const textarea = wrapper.children().find("textarea");
    expect(textarea).toHaveLength(1);
    expect(wrapper.find("TextInput").prop("content")).toBe("");
    textarea.simulate("change", { target: { value: "a" } });
    expect(wrapper.find("TextInput").prop("content")).toBe("a");
  });

  it("correctly update textarea prop on change", () => {
    const wrapper = mount(<App />);
    const textarea = wrapper.children().find("textarea");
    expect(textarea).toHaveLength(1);
    expect(wrapper.find("TextInput").prop("content")).toBe("");
    textarea.simulate("change", { target: { value: "a" } });
    expect(wrapper.find("TextInput").prop("content")).toBe("a");
  });

  it("correctly update fontSize prop on click", () => {
    const wrapper = mount(<App />);
    const decreaseButton = wrapper.find("ModifyFontSize").find("button").at(0);
    expect(decreaseButton).toHaveLength(1);
    expect(wrapper.find("Preview").prop("fontSize")).toBe(50);
    decreaseButton.simulate("click");
    expect(wrapper.find("Preview").prop("fontSize")).toBe(49);

    const increaseButton = wrapper.find("ModifyFontSize").find("button").at(1);
    expect(increaseButton).toHaveLength(1);
    expect(wrapper.find("Preview").prop("fontSize")).toBe(49);
    increaseButton.simulate("click");
    expect(wrapper.find("Preview").prop("fontSize")).toBe(50);
  });
});

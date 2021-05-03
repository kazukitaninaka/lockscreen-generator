import React from "react";
import { shallow } from "enzyme";
import ChooseColor from "../ChooseColor";

describe("ChooseColor", () => {
  it("has 6 color options", () => {
    const wrapper = shallow(<ChooseColor />);
    expect(wrapper.find("input[type='radio']")).toHaveLength(6);
  });
});

import React from "react";
import { shallow } from "enzyme";
import ModifyFontSize from "../ModifyFontSize";

describe("TextInput", () => {
  it("correctly fires event", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <ModifyFontSize decreaseFontSize={onChange} increaseFontSize={onChange} />
    );
    wrapper.find("button").at(0).simulate("click");
    expect(onChange).toHaveBeenCalled();
    wrapper.find("button").at(1).simulate("click");
    expect(onChange).toHaveBeenCalled();
  });
});

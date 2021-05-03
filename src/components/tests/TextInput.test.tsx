import React from "react";
import { shallow } from "enzyme";
import TextInput from "../TextInput";

describe("TextInput", () => {
  it("correctly fires event", () => {
    const onChange = jest.fn();
    const wrapper = shallow(<TextInput handleTextarea={onChange} />);
    wrapper.find("textarea").simulate("change", { target: { value: "a" } });
    expect(onChange).toHaveBeenCalled();
  });
});

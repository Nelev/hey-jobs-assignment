import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, mount } from "enzyme";
import Header from "../components/Header";

configure({ adapter: new Adapter() });
test("Header without name", () => {
  // Render a checkbox with label in the document
  const header = mount(<Header user="name" />);
  expect(header.find(<div />)).toHaveAttribute("");
});

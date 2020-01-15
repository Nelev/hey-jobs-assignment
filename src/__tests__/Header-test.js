import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, mount } from "enzyme";
import Header from "../components/Header";

configure({ adapter: new Adapter() });

test("html elements inside the HEader", () => {
  // Render a header
  const header = mount(<Header user="user" />);
  expect(header.find("span").exists()).toBeTruthy();
  expect(header.find("div").exists()).toBeTruthy();
  expect(header.find("div")).toHaveLength(1);
  expect(header.find("span")).toHaveLength(1);
});

test("Header with a name", () => {
  // Render a headerwith a name prop
  const header = mount(<Header user="name" />);
  expect(header.props().user).toEqual("name");
});

test("Header with no name", () => {
  // Render a headerwith no name prop
  const header = mount(<Header />);
  expect(header.props().user).toEqual(undefined);
});

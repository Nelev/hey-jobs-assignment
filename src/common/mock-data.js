var faker = require("faker");

// fake data exported for test only
// TO-DO --use a mockserver--
const typeList = ["full_time", "part_time"];

const generateJobs = () => {
  const index = Math.floor(Math.random() * 50);
  const items = [];
  for (let i = 0; i < index; i++) {
    items.push({
      id: i,
      title: "title" + i,
      description: faker.lorem.sentence(),
      employmentType: typeList[Math.floor(Math.random() * typeList.length)]
    });
  }
  return items;
};

export const jobs = generateJobs();

export const dummyJobs = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16
];

export const makeAvatar = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const charactersLength = characters.length;
  const result = characters.charAt(
    Math.floor(Math.random() * charactersLength)
  );
  return result;
};

export const makeRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

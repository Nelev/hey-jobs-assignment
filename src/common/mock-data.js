var faker = require("faker");

// fake data exported for test only
// TO-DO --use a mockserver--
const typeList = ["full_time", "part_time"];

const generateJobs = () => {
  const index = Math.floor(Math.random() * 100);
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

import { FC } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { experience_data } from "../../../../mocks";
import { Accent } from "../../../styled-components";

const VerticalTab: FC = () => {
  return (
    <div className="w-full flex justify-start">
      <Tabs>
        <TabList>
          {experience_data.map(({ id, place }) => (
            <Tab key={id}>
              <p>{place}</p>
            </Tab>
          ))}
        </TabList>
        {experience_data.map(({ id, job, place, date, roles, stack }) => (
          <div key={id * 32}>
            <TabPanel>
              <div className="panel-content">
                <h2 className="text-sm">
                  {job} <Accent> @ {place}</Accent>
                </h2>
              </div>
              <span className="block mt-4 text-xs text-blue-font text-center">
                {date}
              </span>
              <ul className="mt-4 leading-3 w-full">
                {roles.map(({ id, role }) => (
                  <div key={id}>
                    <li className=" text-xs text-blue-font my-2">
                      <Accent>-</Accent>
                      {role}
                    </li>
                  </div>
                ))}
              </ul>
              <span className="text-xs">Tech stack: </span>
              <Accent className="text-xs leading-extratiny"> {stack} </Accent>
            </TabPanel>
          </div>
        ))}
      </Tabs>
    </div>
  );
};

export default VerticalTab;

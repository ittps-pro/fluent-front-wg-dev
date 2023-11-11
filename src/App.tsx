import {
  FluentProvider,
  Input,
  webLightTheme,
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
  CardProps,
} from "@fluentui/react-components";
import { Default as Example } from "./example";

import * as api from "./api/wg";
import { CardProvider } from "@fluentui/react-card";
import { Cipher } from "crypto";
import { useState } from "react";

console.log(api);

let labels = ["Username", "IP Address", "Allowed"];
const tpa = ["tpa", "10.10.0.10/24", "10.10.0.1/24"];

const App = () => {
  const [data, setData] = useState([
    {
      id: 1,
      username: "tpa",
      acl: 2,
    },
    {
      id: 2,
      username: "client",
      acl: 1,
    },
  ]);
  return (
    <FluentProvider theme={webLightTheme}>
      <Example />
      <div>
        {tpa.map((i, key) => (
          <Card>
            <CardHeader
              slot="2"
              header={labels[key]}
              color={"black"}
              content={"cc"}
            />

            <CardFooter children={"Data"} />
            <Input
              name={i}
              placeholder={i}
              key={key}
              defaultValue={i}
              type={"text"}
              onChange={(d) => console.log(i, d)}
            />
          </Card>
        ))}
      </div>
    </FluentProvider>
  );
};

export default App;

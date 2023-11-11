import * as React from "react";
import { Select, useId } from "@fluentui/react-components";
import type { SelectProps } from "@fluentui/react-components";

export const Default = (props: SelectProps) => {
  const selectId = useId();
  const [current, setCurrent] = React.useState(selectId);

  const onchange = (i) => {
    console.log(i);
    setCurrent(i);
  };

  const save = (_ctx: { id: number; data: any }) => {
    let config = {
      url: "",
      body: _ctx.data,
      headers: {
        "X-Action-Item-Id": _ctx.id
      },
      method: "POST"
    };

    // fetch()
  };

  let opts = ["test", "test"];

  return (
    <>
      <label htmlFor={selectId}>Color</label>
      <Select id={selectId} {...props}>
        <option>Red</option>
        <option>Green</option>
        <option>Blue</option>
      </Select>
    </>
  );
};

// function axios(config: { data: any; headers: { "X-Action-Item-Id": number; }; }) {
//   throw new Error("Function not implemented.");
// }

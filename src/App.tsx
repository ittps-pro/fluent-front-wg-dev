import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { Default as Example } from "./example";

import * as api from "./api/wg";

console.log(api);
const App = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Example />
    </FluentProvider>
  );
};

export default App;

import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { Default as Example } from "./example";

export const App1 = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Example />
    </FluentProvider>
  );
};

declare module "postcss-import" {
  import type { PluginCreator } from "postcss";

  const postcssImport: PluginCreator<unknown>;
  export default postcssImport;
}

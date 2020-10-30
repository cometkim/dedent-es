declare module "@cometlib/dedent" {
  export default function dedent(strings: TemplateStringsArray, ...values: Array<string>): string;
}

declare module "@cometlib/dedent/macro" {
  import dedent from "@cometlib/dedent";
  export default dedent;
}

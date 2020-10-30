declare module "dedent" {
  export default function dedent(strings: TemplateStringsArray, ...values: Array<string>): string;
}

declare module "dedent/macro" {
  import dedent from "dedent";
  export default dedent;
}

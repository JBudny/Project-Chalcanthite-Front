// flow-typed signature: 2611ad21e4bccaccc96fc54d5fc158ec
// flow-typed version: c6154227d1/react-copy-to-clipboard_v5.x.x/flow_>=v0.104.x

// @flow

declare module 'react-copy-to-clipboard' {
  declare export type CopyToClipboardOptions = {
    debug: boolean,
    message: string,
    ...
  };

  declare export type CopyToClipboardProps = {
    text: string,
    onCopy?: (text: string, result: boolean) => void,
    options?: CopyToClipboardOptions,
    children?: React$Node,
    ...
  };

  declare export class CopyToClipboard extends React$Component<CopyToClipboardProps> {}
  declare export default class CopyToClipboard extends React$Component<CopyToClipboardProps> {}
}

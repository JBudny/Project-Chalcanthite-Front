// @flow
import React from "react";
import v4 from "uuid/v4";
import type { Element, Node } from "react";

export const createLink = (url: string, text: string): Element<"a"> => (
  <a href={`${url}/${text}`}>{text}</a>
);

export const createLinksList = (url: string, list: Array<string>): Node => {
  const listLength: number = list.length;

  return (
    Array.isArray(list) &&
    list.map((el, index) => {
      const key: string = v4();

      if (index < listLength - 1) {
        return (
          <React.Fragment key={key}>
            {createLink(url, el)}
            <span>, </span>
          </React.Fragment>
        );
      }

      return <React.Fragment key={key}>{createLink(url, el)}</React.Fragment>;
    })
  );
};

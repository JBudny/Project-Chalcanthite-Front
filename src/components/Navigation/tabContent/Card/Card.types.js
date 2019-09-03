// @flow
type Post = {
  tags: Array<string>,
  thumbnail: string,
  favorites: number,
  points: number,
  author: string,
  title: string,
  shortDescription: string,
  actualCode: string
};

type ProcessedPost = {
  ...Post,
  tags: string
};

type Props = {
  post: Post
};

export type ProcessedProps = {
  ...Props,
  post: ProcessedPost
};

export type TitlePanelProps = {
  tags: string,
  favorites: number,
  author: string,
  title: string
};

export type ModeBoxProps = {
  thumbnail: string,
  shortDescription: string,
  actualCode: string
};

export type PointsProps = {
  points: number
};

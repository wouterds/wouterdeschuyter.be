import React from 'react';
import marked from 'marked';
import { Container } from './styles';

interface Props {
  markdown: string;
}

const Markdown = (props: Props) => {
  const { markdown } = props;

  <Container dangerouslySetInnerHTML={{ __html: marked(markdown) }} />;
};

export default Markdown;

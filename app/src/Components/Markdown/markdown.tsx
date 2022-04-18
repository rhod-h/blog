import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

function MarkdownListItem(props: any) {
  return <Box component="li" sx={{ mt: 1, typography: 'body1' }} {...props} />;
}

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h4',
        component: 'h1',
      },
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h6', component: 'h2' },
    },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: 'subtitle1' },
    },
    h4: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'caption',
        paragraph: true,
      },
    },
    p: {
      component: Typography,
      props: { paragraph: true },
    },
    a: { component: Link },
    li: {
      component: MarkdownListItem,
    },
  },
};

interface MarkdownProps {
  url: string;
  className: string
}

export default function Markdown(props: MarkdownProps) {
  const { url, className } = props;

  const [md, setMD] = useState('');

  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then((text) => {
        setMD(text);
      });
  });

  return (
    <ReactMarkdown
      className={className}
      options={options}
    >
      {md}
    </ReactMarkdown>
  );
}

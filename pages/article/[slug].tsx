import React from 'react';
import { useRouter } from 'next/router';

const Article: React.FC = () => {
  const router = useRouter();
  console.log(router);

  const { slug } = router.query;
  return <div>{slug}</div>;
};

export default Article;

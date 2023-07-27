// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import dynamic from 'next/dynamic';

const RemotePage = dynamic(() => import('playground/Playground'));

export default function LocalPage(props) {
  return <RemotePage {...props} />
}

export const getServerSideProps = async (ctx) => {
  const remotePage = await import('playground/Playground');

  if (remotePage.getServerSideProps) {
    return remotePage.getServerSideProps(ctx)
  }

  return {
    props: {},
  }
}

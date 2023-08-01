// @ts-nocheck

import dynamic from 'next/dynamic';

const RemotePage = dynamic(() => import('playground/Playground'));

export default function PlaygroundPage(props) {
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

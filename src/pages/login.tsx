// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import dynamic from 'next/dynamic';

const RemotePage = dynamic(() => import('login/LoginPage'));

export default function LocalPage(props) {
  return <RemotePage {...props} />
}

export const getServerSideProps = async (ctx) => {
  const remotePage = await import('login/LoginPage');

  if (remotePage.getServerSideProps) {
    return remotePage.getServerSideProps(ctx)
  }

  return {
    props: {},
  }
}

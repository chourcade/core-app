// @ts-nocheck

import dynamic from 'next/dynamic';

const RemotePage = dynamic(() => import('login/LoginPage'));

export default function LoginPage(props) {
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

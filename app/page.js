import { getFrameMetadata } from '@coinbase/onchainkit';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin"
    }
  ],
  image: 'https://lemon-frame.vercel.app/img-1.png',
  post_url: 'https://fram-liart.vercel.app/api',
});

export const metadata = {
  title: 'ff.limone.lol',
  description: 'zesty',
  openGraph: {
    title: 'ff.limone.lol',
    description: 'zesty',
    images: ['https://lemon-frame.vercel.app/img-2.png'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>test</h1>
    </>
  );
}
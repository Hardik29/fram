import { getFrameMetadata } from '@coinbase/onchainkit';

const frameMetadata = getFrameMetadata({
  buttons: ['YES 🍋'],
  image: 'https://lemon-frame.vercel.app/img-1.png',
  post_url: 'https://lemon-frame.vercel.app/api/frame',
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

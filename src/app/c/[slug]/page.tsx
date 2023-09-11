import { NextPage } from "next";

type PageProps = {
  params: {
    slug: string
  }
};

const Channel: NextPage<PageProps> = async ({ params }) => {
  const { slug } = params;

  return (
    <div className='container'>
      <h1>Channel {slug}</h1>
    </div>
  );
};

export default Channel;
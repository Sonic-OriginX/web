const SkeletonOne = () => {
  return (
    <div className="cursor-default">
      <p className="font-bold md:text-4xl text-xl text-white">
        What is faucet?
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Faucet is a service that provides small amounts of cryptocurrency for free, usually for testing purposes.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div className="cursor-default">
      <p className="font-bold md:text-4xl text-xl text-white">
        $S
      </p>
      <p className="font-normal text-base text-white"></p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div className="cursor-default">
      <p className="font-bold md:text-4xl text-xl text-white">
        $OS
      </p>
      <p className="font-normal text-base text-white"></p>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div className="cursor-default">
      <p className="font-bold md:text-4xl text-xl text-white">
        $wS
      </p>
      <p className="font-normal text-base text-white"></p>
    </div>
  );
};

const SkeletonFive = () => {
  return (
    <div className="cursor-default">
      <p className="font-bold md:text-4xl text-xl text-white">
        $LBTC
      </p>
      <p className="font-normal text-base text-white"></p>
    </div>
  );
};

const SkeletonSix = () => {
  return (
    <div className="cursor-default">
      <p className="font-bold md:text-4xl text-xl text-white">
        $USDCe
      </p>
      <p className="font-normal text-base text-white"></p>
    </div>
  );
};

export const cardsFaucet = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/bg-faucet.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "/bg-sonic.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/bg-os.png",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "/bg-ws.png",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-2",
    thumbnail:
      "/bg-lbtc.png",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "col-span-1",
    thumbnail:
      "/usdce-bg.jpg",
  },
];

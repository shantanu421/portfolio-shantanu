const ReactLogo = () => {
  return (
    <div className="logo logo-container sm:w-20 w-10 sm:ml-[20px] ml-[400px]">
      <img
        src="/logos/react.svg"
        alt="React Logo"
        className="react-glowing-logo"
      />
    </div>
  );
};

const NodeLogo = () => {
  return (
    <div className="logo logo-container sm:w-20 w-10 ">
      <img
        src="/logos/nodejs.svg"
        alt="Node.js Logo"
        className="node-glowing-logo"
      />
    </div>
  );
};

const ExpressLogo = () => {
  return (
    <div className="logo logo-container sm:w-20 w-10 ">
      <img
        src="/logos/express.svg"
        alt="Express Logo"
        className="express-glowing-logo"
      />
    </div>
  );
};

const MongoDbLogo = () => {
  return (
    <div className="logo logo-container sm:w-16 w-10">
      <img
        src="/other-logos/mongodb.svg"
        alt="MongoDB Logo"
        className="mongo-glowing-logo"
      />
    </div>
  );
};

export { ReactLogo, NodeLogo, ExpressLogo, MongoDbLogo };

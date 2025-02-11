
const ReactLogo = () => {
  return (
    <div className="logo logo-container">
      <img src="/public/logos/react.svg" alt="React Logo" className="react-glowing-logo" />
    </div>
  );
};

const NodeLogo = () => {
  return (
    <div className="logo logo-container">
      <img src="/public/logos/nodejs.svg" alt="Node.js Logo" className="node-glowing-logo" />
    </div>
  );
};

const ExpressLogo = () => {
  return (
    <div className="logo logo-container">
      <img src="/public/logos/express.svg" alt="Express Logo" className="express-glowing-logo" />
    </div>
  );
};

const MongoDbLogo = () => {
  return (
    <div className="logo logo-container">
      <img src="/public/logos/mongodb.png" alt="MongoDB Logo" className="mongo-glowing-logo" />
    </div>
  );
};

export { ReactLogo, NodeLogo, ExpressLogo, MongoDbLogo };

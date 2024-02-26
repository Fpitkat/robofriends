const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflowY: 'scroll', // corrected here
        border: '1px solid black',
        height: '75vh',
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;

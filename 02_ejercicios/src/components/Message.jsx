import PropTypes from "prop-types";

const Message = ({ msg, bgColor }) => {
  return (
    <>
      <div style={{ backgroundColor: { bgColor } }}>
        <p>{msg}</p>
      </div>
    </>
  );
};
Message.propTypes = {
  msg: PropTypes.string,
  bgColor: PropTypes.string,
};
export default Message;

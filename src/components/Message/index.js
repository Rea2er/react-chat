import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import classNames from "classnames";
import readedSvg from "../../assets/img/readed.svg";
import noReadedSvg from "../../assets/img/noreaded.svg";

import "./Message.scss";

const Message = ({ avatar, user, text, date, isMe, isReaded }) => {
  return (
    <div className={classNames("message", { "message--isme": isMe })}>
      <div className="message__content">
        {isMe && isReaded ? (
          <img
            className="message__icon-readed"
            src={readedSvg}
            alt="Readed icon"
          />
        ) : (
          <img
            className="message__icon-readed message__icon-readed--no"
            src={noReadedSvg}
            alt="No readed icon"
          />
        )}

        <div className="message__avatar">
          <img src={avatar} alt={`Avatar ${user.fullname}`} />
        </div>
        <div className="message__info">
          <div className="message__bubble">
            <p className="message__text">{text}</p>
          </div>
          <span className="message__date">{moment(date).fromNow()}</span>
        </div>
      </div>
    </div>
  );
};

Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  user: PropTypes.object,
  text: PropTypes.string,
  date: PropTypes.string,
};

export default Message;

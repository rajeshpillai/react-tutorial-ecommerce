import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// gray background
const backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 50
}

const modalStyle = {
    backgroundColor: '#fff',
    borderRadius: 5,
    maxWidth: 500,
    minHeight: 300,
    margin: '0 auto',
    padding: 30,
    position: "relative"
};

const footerStyle = {
    position: "absolute",
    bottom: 20
};

const modalRoot = document.getElementById("modal-root");

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement("div");
    }

    onClose = (e) => {
        e.stopPropagation(); // todo
        this.props.onClose && this.props.onClose(e);
    }

    onKeyUp = (e) => {
        // Lookout for ESC key (27)
        if (e.which === 27 && this.props.show) {
            this.onClose(e);
        }
    }

    componentDidMount() {
        document.addEventListener("keyup", this.onKeyUp);
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        document.removeEventListener("keyup", this.onKeyUp);
        modalRoot.removeChild(this.el);
    }

    render() {
        if (!this.props.show) {
            return null;
        }

        var modalUI = <div style={backdropStyle} className="modal">
            <div style={modalStyle}>
              <button className="close" onClick={e => {
                  this.onClose(e);
                }}>
                &times;
              </button>
                <div className="clearfix"/>
              {this.props.children}
              <div style={footerStyle}>
                {/* <button className="float-right close" onClick={e => {
                    this.onClose(e);
                  }}>
                  Close
                </button> */}
              </div>
            </div>
          </div>;

        return ReactDOM.createPortal(
            modalUI,
            this.el,
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired
}
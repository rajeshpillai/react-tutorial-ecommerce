import React from 'react';
import Modal from '../modal';

const withModal = (WrappedComponent) => {
    class _WithModal extends React.Component {
        state = {
            isOpen: false
        }

        onShow = (e) => {
            this.setState({
                isOpen: true
            });
        }

        onClose = (e) => {
            this.setState({
                isOpen: false
            });
        }

        render() {
            return (
                <div>
                    <div onClick={this.onShow}>
                        <WrappedComponent {...this.props} />
                    </div>
                    {this.state.isOpen && <Modal show={this.state.isOpen} onClose={this.onClose}>
                        <WrappedComponent {...this.props} />
                    </Modal>
                    }
                </div>
            );
        }
    }

    _WithModal.displayName = "WithModal";
    return _WithModal;
}

export default withModal;
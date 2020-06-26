import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class BodyEnd extends React.PureComponent {

    static propTypes = {
        children: PropTypes.node,
    };

    componentDidMount() {
        const { className, onClick } = this.props;
        this._popup = document.createElement('div');
        //this._popup.onclick = onClick;
        this._popup.className = className;
        this._popup.style.cssText = 'position: fixed;top: 0;bottom: 0;left: 0;right: 0;background: rgba(0, 0, 0,0.5); display: flex;zIndex: 999';
        document.body.appendChild(this._popup);
        this._render();
    }

    componentDidUpdate() {
        this._render();
    }

    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(this._popup);
        document.body.removeChild(this._popup);
    }

    _render() {
        ReactDOM.render(this.props.children, this._popup);
    }

    render() {
        return null;
    }
}

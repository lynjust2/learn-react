import PropTypes from 'prop-types';

function Button({ children, version, type, isDisabled }) {
  return (
    // Vanilla button with dynamic class for colour
    <button type={ type } disabled={ isDisabled } className={`fill-width btn ${version}-btn`}>{ children }</button>
  )
}

Button.defaultProps = {
  version: 'accent',
  type: 'button',
  isDisabled: false
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool
}

export default Button

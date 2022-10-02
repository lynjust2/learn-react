import PropTypes from 'prop-types';

function Header({ text, bgColour, textColour }) {
  // Custom CSS styling in variable
  const headerStyles = { backgroundColor: bgColour, color: textColour}

  return (
    <header style={ headerStyles }>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'React Feedback App',
  bgColour: '#FF8300',
  textColour: '#FFFFFF'
}

Header.propTypes = {
  text: PropTypes.string,
  bgColour: PropTypes.string,
  textColour: PropTypes.string
}

export default Header

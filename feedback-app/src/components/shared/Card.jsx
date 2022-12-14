import PropTypes from 'prop-types';

function Card({ children, darkMode }) {
  // return (
  //   <div className={`card ${darkMode && 'darkMode'}`}>
  //     { children }
  //   </div>
  // )

  return (
    // Card component that slots in passed in HTML/jsx
    <div className='card' style={{ backgroundColor: darkMode ? '#000000' : '#FFFFFF', color: darkMode ? '#FFFFFF' : '#000000'}}>
      { children }
    </div>
  )
}


Card.defaultProps = {
  darkMode: true
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  darkMode: PropTypes.bool
}

export default Card

import React from 'react';
/**
 * @param  {Object} props - From props Key <Movies/>
 * @see MovieContainer @function render() 
 * @return - div to display
 */
function Movies (props) { 
  const {info} = props;
  return (
  <div>
    <img src={info['im:image'][2].label}/> {/* From object infor, grab third image from props.info["im:image"][2] */}
    <h3>{info["im:name"].label}</h3>
    <p>{ info["summary"].label }</p>
  </div>
  )
}

export default Movies;
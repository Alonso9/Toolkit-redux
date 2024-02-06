import React from 'react'

export const ButtonComponent = ( props ) => {
    const {title, fnClick, classCSS} = props;
  return (
    <button type="button" className={`btn btn-${classCSS}`} onClick={fnClick}>{ title }</button>
  )
}
//class="btn btn-primary"
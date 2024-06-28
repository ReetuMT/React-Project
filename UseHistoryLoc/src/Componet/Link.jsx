import React,{ useHistory } from 'react'


function Link() {
    const aboutpage= useHistory()
  return (
    <div>
      <p>This is my About page</p>
      <button type="button" class="btn btn-success" onClick={aboutpage.goBack}>Link Page</button>
    </div>
  )
}

export default Link

import React from 'react'
import Section1 from './components/Section1/Section1.jsx';
import Section2 from './components/Section2/Section2';

function App() {
  const users = [
    {
    img:'https://images.unsplash.com/photo-1541560052-5e137f229371?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
    intro: '',
    tag: 'Satisfied'
    },
    {
    img:'https://images.unsplash.com/photo-1585554414787-09b821c321c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
    intro: '',
    tag: 'Underserved'
    },
    {
    img:'https://images.unsplash.com/photo-1555421689-43cad7100750?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
    intro: '',
    tag: 'Underbanked'
    }
  ]
  return (
    <div>
      <Section1 users={users} /> 
      <Section2 />
    </div>
  )
}

export default App

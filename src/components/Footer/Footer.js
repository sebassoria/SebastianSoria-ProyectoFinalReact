import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import './Footer.css'

function Footer() {
  return (
    <MDBFooter className='bg-dark text-center text-white footer-container'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>

          <MDBBtn outline color="light" floating className='m-1 social' href='https://twitter.com/sebastianlsoria' target='blank' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1 social' href='https://www.google.com/' target='blank' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1 social' href='https://www.instagram.com/sebasoriaph/' target='blank' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1 social' href='https://www.linkedin.com/in/sebastian-soria-frontend/' target='blank' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1 social' href='https://github.com/sebassoria' target='blank' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        Sebastián Soria
      </div>
    </MDBFooter>
  )
}

export default Footer


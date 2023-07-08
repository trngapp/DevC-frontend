import React from 'react'
import ContentLoader from 'react-content-loader'

const CleoOne = ({ ...rest }) => (
 <center> <ContentLoader height="730" width="765" foregroundColor="#D3D3D3" viewBox="0 0 265 230" {...rest}>
      {/* <rect x="504" y="233" rx="3" ry="3" width="88" height="6" />*/}
   {/* <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />*/}
    <rect x="-85" y="20" rx="3" ry="3" width="493" height="70" />
    <rect x="-45" y="109" rx="3" ry="3" width="493" height="40" />
    <rect x="-139" y="161" rx="3" ry="3" width="493" height="35" />
   {/* <circle cx="-91" cy="397" r="20" />*/}
  </ContentLoader>
  </center>
)

CleoOne.metadata = {
  name: 'Yusuf Özlü',
  github: 'ozluy',
  description: 'Dashboard strategy item on CLEO.one(https://cleo.one).',
  filename: 'CleoOne',
}

export default CleoOne
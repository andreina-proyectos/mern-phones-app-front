import React from 'react'
import { Dimmer, Loader, Image } from 'semantic-ui-react'

const LoaderSpinner = () => (
  <div>
      <Dimmer active inverted>
        <Loader inverted>Loading Phones...</Loader>
      </Dimmer>
      <Image src='/images/wireframe/short-paragraph.png' />

  </div>
)

export default LoaderSpinner
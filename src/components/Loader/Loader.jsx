import { ColorRing } from 'react-loader-spinner';
import { createPortal } from 'react-dom';

import { SpinnerContainer } from './Loader.styled';

const loaderRoot = document.querySelector('#loader-root');
const Spinner = () => {
  return createPortal(
    <SpinnerContainer>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </SpinnerContainer>,
    loaderRoot
  );
};

export default Spinner;

import cn from 'classnames';
import { useState } from 'react';

import FormWrapper from '../../Form/FormWrapper';

import './BtnBanner.scss';

export default function BtnBanner(props) {
  const {
    classNames,
    btnWayDesk,
    buttonText,
    btnDesk,
    btnDoubts,
    btnWrapperDoubts,
    courseWrapperBtn,
    bannerBtnWrapper,
    btnBanner,
    setIsSubmitted
  } = props;
  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleButtonClick = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div
      className={cn(
        'btnBanner__wrapper',
        classNames,
        { btnBanner__wrapper_way_desk: btnDesk },
        { btnBanner__wrapper_duobts: btnWrapperDoubts },
        { courseProgram__btn_wrapper: courseWrapperBtn },
        { banner_btn_wrapper: bannerBtnWrapper }
      )}
    >
      <div className="wrapper_rr">
        <button
          onClick={handleButtonClick}
          className={cn(
            'btnBanner',
            { btnBanner__way_desk: btnWayDesk },
            { btnBanner_duobts: btnDoubts },
            { btnBanner__banner: btnBanner }
          )}
        >
          {buttonText}
        </button>
        {isFormOpen && <FormWrapper setIsSubmitted={setIsSubmitted} formDoubtsWrapper formBanner formInputPhone formWay />}
      </div>
    </div>
  );
}

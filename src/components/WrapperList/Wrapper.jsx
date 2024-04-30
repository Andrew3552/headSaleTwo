import cn from 'classnames';

export default function Wrapper(props) {
    const {
        className,
        bonusWrapper,
        children,
        trainingWrapper,
        resultsWrapper,
        tariffWrapper,
        courseProgramContainer
    }= props;
  return (
   <ul className={cn(
    'wraper', 
    className,
    {'bonus__wrapper': bonusWrapper},
    {'howTheTraining__wrapper': trainingWrapper},
    {'results__wrapper': resultsWrapper},
    {'tariff__wrapper': tariffWrapper},
    {'courseProgram__wrapper_container': courseProgramContainer}
    )} 
    >
    {children}
   </ul>
  )
}

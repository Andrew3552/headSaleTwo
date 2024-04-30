import cn from 'classnames';

export default function List(props) {
    const {
        children,
        bonusWrapperList,
        className,
        trainingWrapperList,
        resultsWrapperList,
        index,
        tariffWrapperList,
        courseProgramWrapperList
    }= props;
  return (
    <li className={cn(
      'list', 
      className, 
      {'bonus__wrapper_list': bonusWrapperList},
      {'howTheTraining__wrapper_list': trainingWrapperList},
      {'results__wrapper_list': resultsWrapperList, 'alternate': resultsWrapperList && index % 2 === 0},
      {'tariff__wrapper_list': tariffWrapperList},
      {'courseProgram__wrapper_container-list': courseProgramWrapperList}
      )} 
      >
        {children}
    </li>
  )
}

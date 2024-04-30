import './Frame.scss';

export default function Frame ({children, decorElem, styleClass}) {


  return (
    <div  className={`frame ${styleClass}`}>
      {children}
      <span>{decorElem}</span>
    </div>
  )
}
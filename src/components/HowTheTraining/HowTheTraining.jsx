import { item } from './item';

import Wrapper from '../WrapperList/Wrapper';
import List from '../WrapperList/List';
import Container from '../WrapperList/Container';

import './HowTheTraining.scss';

export default function HowTheTraining() {
  function highlightWord(text, wordToHighlight) {
    const parts = text.split(wordToHighlight);
    return (
      <span>
        {parts.map((part, i) => (
          <span key={i}>
            {i > 0 && <p className="colored_text">{wordToHighlight}</p>}
            {part}
          </span>
        ))}
      </span>
    );
  }

  return (
    <div className="howTheTraining">
      <Container className="container">
        <h2 className="howTheTraining__title">Навчання в <p className="gold_gradient_how">Traffic Wolves University</p> це</h2>
        <Wrapper trainingWrapper>
          {item.map((item, index) => (
            <List trainingWrapperList key={index}>
              <img className="howTheTraining__wrapper_list-img" src={item.img} alt="" />
              <h3 className="howTheTraining__wrapper_list-title">{item.title}</h3>
              <p className="howTheTraining__wrapper_list-text"> {highlightWord(item.text, item.textHighlight)}</p>
            </List>
          ))}
        </Wrapper>
      </Container>
    </div>
  );
}

import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

import { CSSTransition } from 'react-transition-group';

import Row from '../../../layout/Row';
import Column from '../../../layout/Column';

import './index.scss';

const baseClass = 'questions';

const questionSetArray = [
  {
    title: 'Where did we first meet?',
    answers: [
      {
        text: 'Working at Culvers',
        isCorrect: true,
      },
      {
        text: 'At Lakeview',
        isCorrect: false,
      },
      {
        text: 'Jarrod played hockey with Collin',
        isCorrect: false,
      },
      {
        text: 'Through mutual friends',
        isCorrect: false,
      },
    ],
  },
  {
    title: 'Who am I',
    answers: [
      {
        text: 'Ans 1',
        isCorrect: true,
      },
      {
        text: 'Ans 2',
        isCorrect: false,
      },
      {
        text: 'Ans 3',
        isCorrect: false,
      },
      {
        text: 'Ans 4',
        isCorrect: false,
      },
    ],
  },
];

const Cards = (props) => {


  const {
    answers,
    handleSelection,
    currentSet,
  } = props;
  console.log('cards', currentSet);
  return questionSetArray[currentSet].answers.map((answer, index) => {
    return (
      <CSSTransition
        appear
        in
        timeout={300 * index}
        classNames="slide"
        onEnter={() => console.log('entering')}
        onExiting={() => console.log('exiting')}
      >
        <Column span={3} key={`answer-${index}`}>
          <div className={`${baseClass}__question-card`}>
            <span className="card-number">{index + 1}</span>
            <button type="button" onClick={() => handleSelection(answer.isCorrect)}>
              <p>{answer.text}</p>
            </button>
          </div>
        </Column>
      </CSSTransition>
    );
  });
};

function Questions() {
  const [changeCards, setChangeCards] = useState(true);
  const [questionIndex, setQuestionIndex] = useState(0);

  return (
    <div>
      {questionSetArray.map((questionSet, index) => {
        return (
          // <CSSTransition
          //   appear
          //   in
          //   timeout={300}
          //   classNames="slide"
          //   onEnter={() => console.log('entering')}
          //   onExiting={() => console.log('exiting')}
          // >
          <Row>
            <Column span={12}>
              <Cards currentSet={questionIndex} />
            </Column>
          </Row>
          // </CSSTransition>
        );
      })}

      <button onClick={() => setQuestionIndex(questionIndex - 1)}>Last</button>
      <button onClick={() => setQuestionIndex(questionIndex + 1)}>Next</button>
    </div>
  );
}

export default Questions;

// class Questions extends Component {
//   constructor() {
//     super();

//     this.state = {
//       currentQuestionIndex: 0,
//       isCorrect: false,
//       contacts: ['Harry', 'Ron', 'Hermoine', 'Hagrid', 'Hedwig'],
//       count: 0,
//     };
//   }

//   handleSelection = (isAnswerCorrect) => {
//     if (isAnswerCorrect) {
//       this.setState({ isCorrect: true });
//       // alert('You are too smart, this section is incomplete though 😃');
//     }
//   }

//   nextContact = () => {
//     const l = this.state.contacts.length - 1;
//     if (this.state.count !== l) {
//       this.setState(prevState => ({
//         count: prevState.count + 1,
//         currentContact: prevState.contacts[prevState.count + 1],
//       }));
//     } else {
//       this.setState(prevState => ({
//         count: 0,
//         currentContact: prevState.contacts[0],
//       }));
//     }
//   }

//   render() {
//     // const { currentQuestionIndex, isCorrect } = this.state;

//     const { count, currentContact } = this.state;
//     const styles = {
//       container: { display: 'flex', justifyContent: 'center', width: '100vw', height: 300 },
//       btn: { width: '100%', display: 'flex', justifyContent: 'center' },
//     };

//     return (
//       <div className="test">
//         <div style={styles.container}>
//           <CSSTransition
//             in
//             appear={false}
//             key={count}
//             timeout={900}
//             classNames="slide"
//             unmountOnExit={true}
//           >
//             <div>
//               <p>{currentContact}</p>
//             </div>
//           </CSSTransition>
//         </div>
//         <div style={styles.btn}>
//           <button onClick={this.nextContact}>next</button>
//         </div>
//       </div>
//     );
//     // return (
//     //   questionSetArray.map((question, index) => {
//     //     return (
//     //       <div key={`question-${index}`} className={baseClass}>
//     //         <Row>
//     //           <Column span={12} className={`${baseClass}__question-text`}>
//     //             <h4>{question.title}</h4>
//     //           </Column>

//     //           <Cards handleSelection={this.handleSelection} answers={question.answers} />

//     //           <CSSTransition in={isCorrect} timeout={1000} classNames="my-node" appear>
//     //             <div>
//     //               {"I'll receive my-node-* classes"}
//     //             </div>
//     //           </CSSTransition>
//     //           <Column span={12}>
//     //             <div className={`${baseClass}__navigation`}>
//     //               <span>{'< '}</span>
//     //               <span>{'>'}</span>
//     //             </div>
//     //           </Column>
//     //         </Row>
//     //       </div>
//     //     );
//     //   })
//     // );
//   }
// }

import {BuzzFeedQuiz} from "react-buzzfeed-quiz";
import "react-buzzfeed-quiz/lib/styles.css";
import {Nunito_Sans} from '@next/font/google';
import Chance from 'chance';


const chance = new Chance();
// If loading a variable font, you don't need to specify the font weight
const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: '400',
})

export default function Home() {
  const sampleQuestions = [
    {
      question: "Here's a default question",
      answers: [
        {
          answer: "Answer one",
          resultID: 0,
        },
        {
          answer: "Answer two",
          resultID: 1,
        },
        {
          answer: "Answer three",
          resultID: 2,
        },
      ],
    },
    {
      question: "Let's add some background and font colors",
      backgroundColor: "rgb(211, 211, 211)",
      fontColor: "#000",
      answers: [
        {
          answer: "First answer",
          backgroundColor: "red",
          fontColor: "rgb(215, 215, 215)",
          resultID: 0,
        },
        {
          answer: "Second answer",
          backgroundColor: "orange",
          fontColor: "green",
          resultID: 1,
        },
        {
          answer: "Third answer",
          backgroundColor: "yellow",
          fontColor: "#000",
          resultID: 2,
          revealResponse: {
            title: "Here's an answer response!",
            description: "Here's a description for the answer response!",
            imageAttribution: "Answer response image attribution text goes here",
          },
        },
      ],
    },
    {
      question: "Here is some overlapping image text",
      questionRelativeToImage: "overlap",
      imageAttribution: "Question image attribution text goes here",
      answerArrangement: "tile",
      answers: [
        {
          answer: "This answer has a background photo",
          resultID: 0,
          imageAttribution: "Answer photo attribution text goes here",
        },
        {
          answer: "Not this one, though",
          resultID: 1,
          backgroundColor: "rgb(238,243,247)",
          fontColor: "rgb(53,51,48)",
        },
        {
          answer: "Not this one, either",
          resultID: 2,
          backgroundColor: "rgb(238,243,247)",
          fontColor: "rgb(53,51,48)",
        },
      ],
    },
    {
      question: "Here is some adjacent image text",
      questionRelativeToImage: "adjacent",
      answerArrangement: "row",
      answers: [
        {
          answer: "Answer one",
          resultID: 0,
        },
        {
          answer: "Answer two",
          resultID: 1,
        },
        {
          answer: "Answer three",
          resultID: 2,
        },
      ],
    },
    {
      question: "Answers can also trigger a callback function",
      answers: [
        {
          answer: "This one does not trigger a function",
          resultID: 0,
        },
        {
          answer: "Click for answer function",
          onAnswerSelection: (questionIndex, answerIndex, resultID) =>
            alert("This alert is caused by an answer selection!"),
          resultID: 1,
        },
      ],
    },
  ];
  const questions = [
    {
      "question": "Ich finde einen angefahrenen Igel an der Straße und ich",
      "answers": [
        {
          "answer": "nehme ihn mit nach Hause und pflege ihn",
          "resultID": 3
        },
        {
          "answer": "verarzte ihn an Ort + Stelle",
          "resultID": 1
        },
        {
          "answer": "rette erst ihn und starte dann meine eigene Tierarztpraxis",
          "resultID": 4
        },
        {
          "answer": "bringe ihn zu einem Tierarzt",
          "resultID": 5
        }]
    },
    {
      "question":
        "Mein Lieblings-Emoji",
      "answers":
        [
          {
            "answer": "🦄",
            "resultID": 2
          },
          {
            "answer": "❤️",
            "resultID": 3
          },
          {
            "answer": "🦊",
            "resultID": 5
          },
          {
            "answer": "🚨",
            "resultID": 4
          }
        ]
    }
    ,
    {
      "question":
        "Mein Kindheitsheld",
      "answers":
        [
          {
            "answer": "Pippi Langstrumpf",
            "resultID": 1
          },
          {
            "answer": "Sailor Moon",
            "resultID": 2
          },
          {
            "answer": "Sendung mit der Maus",
            "resultID": 5
          },
          {
            "answer": "Sand-männchen",
            "resultID": 3
          }
        ]
    }
    ,
    {
      "question":
        "Ich kaufe Weihnachts-geschenke…",
      "answers":
        [
          {
            "answer": "last minute Spende als Geschenk",
            "resultID": 4
          },
          {
            "answer": "EXIT RACISM für die Großeltern",
            "resultID": 1
          },
          {
            "answer": "Ein Jahr im Voraus",
            "resultID": 3
          },
          {
            "answer": "ich kauf nicht, ich bastel",
            "resultID": 2
          }
        ]
    }
    ,
    {
      "question":
        "Mein Flirtspruch:",
      "answers":
        [
          {
            "answer": "Gibst du mir deine Nummer?",
            "resultID": 1
          },
          {
            "answer": "Ich stecke meinem Schwarm mein Handy in die Tasche und rufe es von einer Telefonzelle an",
            "resultID": 4
          },
          {
            "answer": "Meine Hand ist so schwer, hältst du sie mal kurz?",
            "resultID": 2
          },
          {
            "answer": "Ich flirte nicht.",
            "resultID": 5
          }
        ]
    }
    ,
    {
      "question":
        "Das perfekte erste Date",
      "answers":
        [
          {
            "answer": "Achterbahn fahren",
            "resultID": 4
          },
          {
            "answer": "Sauna",
            "resultID": 1
          },
          {
            "answer": "Ich koche etwas Leckeres",
            "resultID": 3
          },
          {
            "answer": "Einen Töpferkurs gemeinsam machen",
            "resultID": 2
          }
        ]
    }
  ];
  let orgs = [
    {
      name: 'BASE UA',
      imageUrl: '',
      attributes: [1, 3, 4]
    },
    {
      name: 'TMR',
      imageUrl: '',
      attributes: [1, 4]
    },
    {
      name: 'Libereco',
      imageUrl: '',
      attributes: [1, 5]
    },
    {
      name: 'MVI Serbien',
      imageUrl: '',
      attributes: [3, 5]
    },
    {
      name: 'Blindspots',
      imageUrl: '',
      attributes: [3, 5]
    },
    {
      name: 'SOS Balkanroute',
      imageUrl: '',
      attributes: [3]
    },
    {
      name: 'Netzwerk Ziviler Krisenstab',
      imageUrl: '',
      attributes: [5]
    },

    {
      name: 'Ukraine - Hilfe Berlin',
      imageUrl: '',
      attributes: [3]
    },


    {
      name: 'Equal Rights beyond borders',
      imageUrl: '',
      attributes: [3, 5]
    },
    {
      name: 'Aegean Boat Report',
      imageUrl: '',
      attributes: [1, 3, 5]
    },

    {
      name: 'Fenix',
      imageUrl: '',
      attributes: [3, 5]
    },

    {
      name: 'Legal Center Lesvos',
      imageUrl: '',
      attributes: [3, 5]
    },

    {
      name: 'Parea Center (Europe Cares)',
      imageUrl: '',
      attributes: [2, 3]
    },

    {
      name: 'Rosa Safe Space',
      imageUrl: '',
      attributes: [2, 3]
    },

    {
      name: 'Earth medicine physical rehabilitation',
      imageUrl: '',
      attributes: [3, 5]
    },

    {
      name: 'Yoga & Sports',
      imageUrl: '',
      attributes: [2, 3]
    },

    {
      name: 'Makerspace Lesvos',
      imageUrl: '',
      attributes: [2, 5]
    },

    {
      name: 'Just Action Samos',
      imageUrl: '',
      attributes: [3]
    },


    {
      name: 'MVI Lesbos',
      imageUrl: '',
      attributes: [3, 5]
    },

    {
      name: 'Boat Theater Group',
      imageUrl: '',
      attributes: [2, 5]
    },
    {
      name: 'Babel Athen',
      imageUrl: '',
      attributes: [3, 5]
    },

    {
      name: 'No Nation Truck',
      imageUrl: '',
      attributes: [1, 2]
    },

    {
      name: 'Wir packens an',
      imageUrl: '',
      attributes: [2, 3]
    },

    {
      name: 'Solibus',
      imageUrl: '',
      attributes: [2, 3]
    },
    {
      name: 'Visions for Children',
      imageUrl: '',
      attributes: [1, 3, 5]
    },
    {
      name: 'Kabul Luftbrücke',
      imageUrl: '',
      attributes: [1, 4]
    },

    {
      name: 'Hawar Help',
      imageUrl: '',
      attributes: [3, 5]
    },

    {
      name: 'Hawar Help Fussball',
      imageUrl: '',
      attributes: [2, 3]
    },


    {
      name: 'No Name Kitchen',
      imageUrl: '',
      attributes: [1, 2]
    },


    {
      name: 'Liebe im Karton',
      imageUrl: '',
      attributes: [2, 3]
    },


    {
      name: 'Seapunks',
      imageUrl: '',
      attributes: [1, 5]
    },


    {
      name: 'refocus media labs',
      imageUrl: '',
      attributes: [2, 5]
    },


    {
      name: 'pinkbus / helpbus',
      imageUrl: '',
      attributes: [3]
    },


    {
      name: 'Iranjournal',
      imageUrl: '',
      attributes: [1, 5]
    },


    {
      name: 'Human Plus e.V.',
      imageUrl: '',
      attributes: [1]
    },
  ];

  const sampleResults = [
    {
      title: "Your first result title goes here",
      description: "Your first result description goes here",
      imageAttribution: "Your photo attribution text goes here",
      resultID: 0,
    },
    {
      title: "Your second result title goes here",
      description: "Your second result description goes here",
      resultID: 1,
    },
    {
      title: "Your third result title goes here",
      description: "Result images and attributions are optional!",
      resultID: 2,
    },
  ];


  const results = [
    {
      title: "MUTIG",
      description: `Herzlichen Glückwunsch, Braveheart! Du gehst furchtlos deinen Weg. Du bist mutig. Du bist ${chance.pickone(orgs.filter((org) => org.attributes.includes(1))).name} <a>test</a>`,
      imageAttribution: "Your photo attribution text goes here",
      resultID: 1,
    },

    {
      title: "KREATIV",
      description: `Wow, deine Kreativität ist grenzenlos! Du denkst unkonventionell. Du bist künstlerisch. Du bist ${chance.pickone(orgs.filter((org) => org.attributes.includes(2))).name}`,
      imageAttribution: "Your photo attribution text goes here",
      resultID: 2,
    },

    {
      title: "FÜRSORGLICH",
      description: `Oh wow, dich hätte ich gerne als Freund. LeaveNoOneBehind ist genau deine Philosophie. Du lässt niemanden hängen. Du bist fürsorglich, du bist ${chance.pickone(orgs.filter((org) => org.attributes.includes(3))).name}`,
      imageAttribution: "Your photo attribution text goes here",
      resultID: 3,
    },

    {
      title: "DRAUFGÄNGERISCH",
      description: `High-Five Draufgänger! Du lachst der Gefahr ins Gesicht. Keine Angst vor niemandem, du bist ${chance.pickone(orgs.filter((org) => org.attributes.includes(4))).name}`,
      imageAttribution: "Your photo attribution text goes here",
      resultID: 4,
    },

    {
      title: "CLEVER",
      description: `Geht nicht? Gibt’s nicht. Du findest schlaue Lösungen und bist blitzgescheit. Du bist ${chance.pickone(orgs.filter((org) => org.attributes.includes(5))).name}`,
      imageAttribution: "Your photo attribution text goes here",
      resultID: 5,
    },
  ];

  const primary = "#0f173d";
  const secondary = "#9095bb";
  const tertiary = "#ff3300";
  return (
    <div className={nunitoSans.className}>
      <BuzzFeedQuiz
        generalBackgroundColor={primary}
        generalFontColor={"#ffffff"}
        title={"welche orga bist du quiz"}
        description={"Finde heraus welche Orga zu dir passt."}
        byline={false}
        bylineAuthor={"LeaveNoOneBehind"}
        bylineAuthorLink={"https://strongertogether.lnob.net/"}
        bylineAuthorLinkOpenInNewTab={true}
        bylineAuthorTagline={"#strongertogether"}
        autoScroll={true}
        onRestart={() => console.log("This alert was triggered by the onRestart prop!")}
        onResult={() => console.log("The onResult prop triggered this alert!")}
        onAnswerSelection={(questionIndex, answerIndex, resultID) =>
          console.log({
            questionIndex,
            answerIndex,
            resultID,
          })
        }
        facebookShareButton={true}
        facebookShareLink={"www.yourlink.com"}
        twitterShareButton={true}
        twitterShareLink={"www.yourlink.com"}
        copyShareButton={true}
        copyShareLink={"This text was copied using the copyShareLink prop."}
        questions={questions}
        results={results}
      />
    </div>
  )
}

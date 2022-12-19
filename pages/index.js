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
      imageUrl: 'https://strongertogether.lnob.net/wp-content/uploads/2022/11/BASE_Logo_W_UA-1200x882.png',
      attributes: [1, 3, 4]
    },
    {
      name: 'TMR',
      imageUrl: '',
      attributes: [1, 4]
    },
    {
      name: 'Libereco',
      imageUrl: 'https://strongertogether.lnob.net/wp-content/uploads/2022/11/Logo_Libereco-400x111.png',
      attributes: [1, 5]
    },
    {
      name: 'MVI Serbien',
      imageUrl: 'https://strongertogether.lnob.net/wp-content/uploads/2022/11/MVI_Logo-1200x303.png',
      attributes: [3, 5]
    },
    {
      name: 'Blindspots',
      imageUrl: 'https://strongertogether.lnob.net/wp-content/uploads/2022/11/Blindspots_Logo_w-1200x986.png',
      attributes: [3, 5]
    },
    {
      name: 'SOS Balkanroute',
      imageUrl: 'https://strongertogether.lnob.net/wp-content/uploads/2022/11/Logo_SOSB.png',
      attributes: [3]
    },
    {
      name: 'Netzwerk Ziviler Krisenstab',
      imageUrl: 'https://strongertogether.lnob.net/wp-content/uploads/2022/11/Logo_NZK-400x227.png',
      attributes: [5]
    },

    {
      name: 'Ukraine - Hilfe Berlin',
      imageUrl: 'https://strongertogether.lnob.net/wp-content/uploads/2022/11/Logo_UHB.png',
      attributes: [3]
    },


    {
      name: 'Equal Rights beyond borders',
      imageUrl: 'https://strongertogether.lnob.net/wp-content/uploads/2022/11/Logo_ERBB-1200x286.png',
      attributes: [3, 5]
    },
    {
      name: 'Aegean Boat Report',
      imageUrl: 'https://strongertogether.lnob.net/wp-content/uploads/2022/11/ABR_R-1200x1042.png',
      attributes: [1, 3, 5]
    },

    {
      name: 'Fenix',
      imageUrl: 'https://strongertogether.lnob.net/wp-content/uploads/2022/11/Logo_Fenix-400x167.png',
      attributes: [3, 5]
    },

    {
      name: 'Legal Center Lesvos',
      imageUrl: 'https://strongertogether.lnob.net/wp-content/uploads/2022/11/Logo_LCL.png',
      attributes: [3, 5]
    },

    {
      name: 'Parea Center (Europe Cares)',
      imageUrl: 'https://strongertogether.lnob.net/wp-content/uploads/2022/12/ECLogo.png',
      attributes: [2, 3]
    },

    {
      name: 'Rosa Safe Space',
      imageUrl: 'https://strongertogether.lnob.net/wp-content/uploads/2022/11/Logo_ROSA_Weiss-1200x500.png',
      attributes: [2, 3]
    },

    {
      name: 'Earth medicine physical rehabilitation',
      imageUrl: 'https://strongertogether.lnob.net/wp-content/uploads/2022/11/Logo_EM.png',
      attributes: [3, 5]
    },

    {
      name: 'Yoga & Sports',
      imageUrl: 'https://strongertogether.lnob.net/wp-content/uploads/2022/11/Logo_YS-1200x1048.png',
      attributes: [2, 3]
    },

    {
      name: 'Makerspace Lesvos',
      imageUrl: 'https://strongertogether.lnob.net/wp-content/uploads/2022/11/Logo_Makerspace.png',
      attributes: [2, 5]
    },

    {
      name: 'Just Action Samos',
      imageUrl: 'https://strongertogether.lnob.net/wp-content/uploads/2022/11/Logo_JAS-400x400.png',
      attributes: [3]
    },


    {
      name: 'MVI Lesbos',
      imageUrl: 'https://strongertogether.lnob.net/wp-content/uploads/2022/11/MVI_Logo-1200x303.png',
      attributes: [3, 5]
    },

    {
      name: 'Boat Theater Group',
      imageUrl: 'https://strongertogether.lnob.net/wp-content/uploads/2022/12/StrongerTogether_Promis7-400x400.jpg',
      attributes: [2, 5]
    },
    {
      name: 'Babel Athen',
      imageUrl: '',
      attributes: [3, 5]
    },

    {
      name: 'No Nation Truck',
      imageUrl: 'https://strongertogether.lnob.net/wp-content/uploads/2022/12/StrongerTogether_Promis97193918911232096-copy-400x400.jpeg',
      attributes: [1, 2]
    },

    {
      name: 'Wir packens an',
      imageUrl: 'https://strongertogether.lnob.net/wp-content/uploads/2022/12/StrongerTogether_Promis9-400x400.jpg',
      attributes: [2, 3]
    },

    {
      name: 'Solibus',
      imageUrl: 'https://strongertogether.lnob.net/wp-content/uploads/2022/11/Logo_Solibus-1200x958.png',
      attributes: [2, 3]
    },
    {
      name: 'Visions for Children',
      imageUrl: 'https://strongertogether.lnob.net/wp-content/uploads/2022/11/Logo_Visions-400x132.png',
      attributes: [1, 3, 5]
    },
    {
      name: 'Kabul Luftbrücke',
      imageUrl: 'https://strongertogether.lnob.net/wp-content/uploads/2022/12/signal-2022-12-07-190127_002.png',
      attributes: [1, 4]
    },

    {
      name: 'Hawar Help',
      imageUrl: 'https://strongertogether.lnob.net/wp-content/uploads/2022/11/Hawar_Logo-400x308.png',
      attributes: [3, 5]
    },

    {
      name: 'Hawar Help Scoring Girls*',
      imageUrl: 'https://strongertogether.lnob.net/wp-content/uploads/2022/11/Logo_Scoring_Girls.png',
      attributes: [2, 3]
    },


    {
      name: 'No Name Kitchen',
      imageUrl: 'https://strongertogether.lnob.net/wp-content/uploads/2022/11/NNK_Logo-1200x1160.png',
      attributes: [1, 2]
    },


    {
      name: 'Liebe im Karton',
      imageUrl: 'https://strongertogether.lnob.net/wp-content/uploads/2022/12/StrongerTogether_Promis26-2-400x400.jpg',
      attributes: [2, 3]
    },


    {
      name: 'Seapunks',
      imageUrl: 'https://strongertogether.lnob.net/wp-content/uploads/2022/12/Logo_SP.png',
      attributes: [1, 5]
    },


    {
      name: 'refocus media labs',
      imageUrl: 'https://strongertogether.lnob.net/wp-content/uploads/2022/11/Logo_Refocus-1200x1158.png',
      attributes: [2, 5]
    },


    {
      name: 'pinkbus / helpbus',
      imageUrl: 'https://strongertogether.lnob.net/wp-content/uploads/2022/11/Logo_Helpbus.png',
      attributes: [3]
    },


    {
      name: 'Iranjournal',
      imageUrl: 'https://strongertogether.lnob.net/wp-content/uploads/2022/11/Iran_Logo.png',
      attributes: [1, 5]
    },


    {
      name: 'Human Plus e.V.',
      imageUrl: 'https://strongertogether.lnob.net/wp-content/uploads/2022/12/humanplus_logo-2.png',
      attributes: [1]
    },
  ];

  const resultOrgs = [1, 2, 3, 4, 5].map((resultId) => chance.pickone(orgs.filter((org) => org.attributes.includes(resultId))));

  const results = [
    {
      title: "MUTIG",
      description: `Herzlichen Glückwunsch, Braveheart! Du gehst furchtlos deinen Weg. Du bist mutig. Du bist ${resultOrgs[0].name}`,
      resultID: 1,
      resultImageSrc: resultOrgs[0].imageUrl
    },

    {
      title: "KREATIV",
      description: `Wow, deine Kreativität ist grenzenlos! Du denkst unkonventionell. Du bist künstlerisch. Du bist ${resultOrgs[1].name}`,
      resultID: 2,
      resultImageSrc: resultOrgs[1].imageUrl
    },

    {
      title: "FÜRSORGLICH",
      description: `Oh wow, dich hätte ich gerne als Freund. LeaveNoOneBehind ist genau deine Philosophie. Du lässt niemanden hängen. Du bist fürsorglich, du bist ${resultOrgs[2].name}`,
      resultID: 3,
      resultImageSrc: resultOrgs[2].imageUrl
    },

    {
      title: "DRAUFGÄNGERISCH",
      description: `High-Five Draufgänger! Du lachst der Gefahr ins Gesicht. Keine Angst vor niemandem, du bist ${resultOrgs[3].name}`,
      resultID: 4,
      resultImageSrc: resultOrgs[3].imageUrl
    },

    {
      title: "CLEVER",
      description: `Geht nicht? Gibt’s nicht. Du findest schlaue Lösungen und bist blitzgescheit. Du bist ${resultOrgs[4].name}`,
      resultID: 5,
      resultImageSrc: resultOrgs[4].imageUrl
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

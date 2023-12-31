import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Halloween from "./Halloween";
import "./fonts/cf_halloween/CFHalloween-Regular.ttf";
import "./fonts/halloween_day_s/halloween_days.ttf";

function App() {
  return (
    <>
      <Canvas>
        <OrbitControls enableZoom={true} />
        <Halloween />
      </Canvas>
      <div className="container">
        <h1>HALLOWEEN</h1>
        <h2>Octorber 31,2023</h2>
        <p>
          Halloween, contraction of All Hallows’ Eve, a holiday observed on
          October 31, the evening before All Saints’ (or All Hallows’) Day. The
          celebration marks the day before the Western Christian feast of All
          Saints and initiates the season of Allhallowtide, which lasts three
          days and concludes with All Souls’ Day. In much of Europe and most of
          North America, observance of Halloween is largely nonreligious.
        </p>
        <p>
          Halloween had its origins in the festival of Samhain among the Celts
          of ancient Britain and Ireland. On the day corresponding to November 1
          on contemporary calendars, the new year was believed to begin. That
          date was considered the beginning of the winter period, the date on
          which the herds were returned from pasture and land tenures were
          renewed. During the Samhain festival the souls of those who had died
          were believed to return to visit their homes, and those who had died
          during the year were believed to journey to the otherworld. People set
          bonfires on hilltops for relighting their hearth fires for the winter
          and to frighten away evil spirits, and they sometimes wore masks and
          other disguises to avoid being recognized by the ghosts thought to be
          present. It was in those ways that beings such as witches, hobgoblins,
          fairies, and demons came to be associated with the day. The period was
          also thought to be favourable for divination on matters such as
          marriage, health, and death. When the Romans conquered the Celts in
          the 1st century CE, they added their own festivals of Feralia,
          commemorating the passing of the dead, and of Pomona, the goddess of
          the harvest.
        </p>
        <p>
          In the 7th century CE Pope Boniface IV established All Saints’ Day,
          originally on May 13, and in the following century, perhaps in an
          effort to supplant the pagan holiday with a Christian observance, it
          was moved to November 1. The evening before All Saints’ Day became a
          holy, or hallowed, eve and thus Halloween. By the end of the Middle
          Ages, the secular and the sacred days had merged. The Reformation
          essentially put an end to the religious holiday among Protestants,
          although in Britain especially Halloween continued to be celebrated as
          a secular holiday. Along with other festivities, the celebration of
          Halloween was largely forbidden among the early American colonists,
          although in the 1800s there developed festivals that marked the
          harvest and incorporated elements of Halloween. When large numbers of
          immigrants, including the Irish, went to the United States beginning
          in the mid 19th century, they took their Halloween customs with them,
          and in the 20th century Halloween became one of the principal U.S.
          holidays, particularly among children.
        </p>
        <p>
          As a secular holiday, Halloween has come to be associated with a
          number of activities. One is the practice of pulling usually harmless
          pranks. Celebrants wear masks and costumes for parties and for
          trick-or-treating, thought to have derived from the British practice
          of allowing the poor to beg for food, called “soul cakes.”
          Trick-or-treaters go from house to house with the threat that they
          will pull a trick if they do not receive a treat, usually candy.
          Halloween parties often include games such as bobbing for apples,
          perhaps derived from the Roman celebration of Pomona. Along with
          skeletons and black cats, the holiday has incorporated scary beings
          such as ghosts, witches, and vampires into the celebration. Another
          symbol is the jack-o’-lantern, a hollowed-out pumpkin, originally a
          turnip, carved into a demonic face and lit with a candle inside. Since
          the mid-20th century the United Nations Children’s Fund (UNICEF) has
          attempted to make the collection of money for its programs a part of
          Halloween.
        </p>
      </div>
    </>
  );
}

export default App;

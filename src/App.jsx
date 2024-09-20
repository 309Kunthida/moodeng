import { useState } from "react";
import Profile from './components/profile'; 
import meImage from './me.jpg'; 
import tangmoImage from './img/tangmo.jpg';
import fugthongImage from './img/fugthong.jpg';
import yahImage from './img/yah.jpg';
import moodengImage from './img/moodeng.jpg'; // แก้ไขเส้นทางภาพ

export default function App() {
  const [level, setLevel] = useState(10);
  const [moodeng, setMoodeng] = useState(moodengImage);

  const feedmoodeng = (foodValue) => {
    const newLevel = level + foodValue;
    if (newLevel > 100) {
      setMoodeng(meImage); 
    }
    setLevel(newLevel);
  };

  return(
    <>
      <div style={{ 
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100vw', 
        textAlign: 'center', 
        }}>
        <h1 style={{ color: '#81d4fa' }}>Level of Nong Moodeng: {level}</h1>
      </div>

      <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
      }}> 
        <img src={moodeng} 
          alt="หมูเด้ง"
          style={{ 
            width: `${100 + level}px`, 
            height: `${100 + level}px`, 
            transition: 'width 0.3s, height 0.3s', 
            borderRadius: '10px', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            marginBottom: '20px',
            border: '8px solid lightblue',    
          }} 
        />
      </div>

      <div style={{ 
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',  
        alignItems: 'center',      
        marginTop: '20px'   
      }}>
        <button onClick={() => feedmoodeng(5)} style={buttonStyle}>
          <div style={{
            border: '7px solid lightblue', 
            borderRadius: '10px',   
            padding: '15px',    
          }}>
            <img src={tangmoImage} alt="แตงโม" style={{
              ...buttonImageStyle,      
              width: '70px',      
              height: '70px',     
              margin: '-10px',    
            }}/>
          </div>
        </button>

        <button onClick={() => feedmoodeng(10)} style={buttonStyle}>
          <div style={{
            border: '7px solid lightblue',
            borderRadius: '10px',
            padding: '15px',
          }}>
            <img src={fugthongImage} alt="ฟักทอง" style={{
              ...buttonImageStyle, 
              width: '70px', 
              height: '70px', 
              margin: '-10px', 
            }}/>
          </div>
        </button>

        <button onClick={() => feedmoodeng(20)} style={buttonStyle}>
          <div style={{
            border: '7px solid lightblue',
            borderRadius: '10px',
            padding: '15px',
          }}>
            <img src={yahImage} alt="หญ้า" style={{
              ...buttonImageStyle, 
              width: '70px', 
              height: '70px', 
              margin: '-10px', 
            }}/>
          </div>
        </button>
      </div>
      
      <Profile level={level} moodengImage={moodeng} />
    </>
  );
}

const buttonStyle = {
  border: 'none',
  borderRadius: '5px',
  padding: '10px',
  cursor: 'pointer',
  transition: 'transform 0.2s',
};

const buttonImageStyle = {
  width: '50px',
  height: '50px',
};

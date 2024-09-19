import { useState } from "react";
import Profile from './components/profile'; 
import meImage from './me.jpg'; 


export default function App() {
  const [level,setLevel] = useState(10);
  const [moodengImage,setMoodeng] = useState("moodeng.jpg");

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

      <img src={moodengImage} 
        alt="หมูเด้ง"
        style={{ 
          width: `${100 + level}px`, 
          height: `${100 + level}px`, 
          transition: 'width 0.3s, height 0.3s', 
          borderRadius: '10px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          marginBottom: '20px',
          border: '8px solid lightblue',    // เพิ่มกรอบฟ้า
          
        }} 
       />
    </div>


    <div style={{ 
      display: 'flex',
      gap: '10px',
      justifyContent: 'center',   // ทำให้รูปอยู่ตรงกลางแบบแนวนอน
      alignItems: 'center',       // ทำให้รูปอยู่ตรงกลางแบบแนวตั้ง
      marginTop: '20px'   
      }}>


      <button onClick={() => feedmoodeng(5)} style={buttonStyle}>
        
        <div style={{
      border: '7px solid lightblue',    // กรอบสีฟ้าอ่อน
      borderRadius: '10px',     // กรอบมน
      padding: '15px',    // ระยะห่างกรอบกับรูป
    }}>
          <img src="tangmo.jpg" alt="แตงโม" style={{
      ...buttonImageStyle,      //รวมสไตล์
      width: '70px',      // เพิ่มขนาดรูป
      height: '70px',     // เพิ่มขนาดรูป
      margin: '-10px',    // ระยะห่างระหว่างกรอบกับรูป
    }}/>
  </div>
</button>

      <button onClick={() => feedmoodeng(10)} style={buttonStyle}>
        <div style={{
      border: '7px solid lightblue',
      borderRadius: '10px',
      padding: '15px',
    }}>
          <img src="fugthong.jpg" alt="ฟักทอง" style={{
      ...buttonImageStyle, //รวมสไตล์
      width: '70px', // เพิ่มขนาดรูป
      height: '70px', // เพิ่มขนาดรูป
      margin: '-10px', // ระยะห่างระหว่างกรอบกับรูป
    }}/>
  </div>
</button>
        
      <button onClick={() => feedmoodeng(20)} style={buttonStyle}>
        <div style={{
      border: '7px solid lightblue',
      borderRadius: '10px',
      padding: '15px',
    }}>
          <img src="yah.jpg" alt="หญ้า" style={{
      ...buttonImageStyle, //รวมสไตล์
      width: '70px', // เพิ่มขนาดรูป
      height: '70px', // เพิ่มขนาดรูป
      margin: '-10px', // ระยะห่างระหว่างกรอบกับรูป
    }}/>
  </div>
</button>
        
    </div>
    
    
    <Profile level={level} moodengImage={moodengImage} />
    
  </>
  
);
}

// Styles for buttons
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

// Hover effect
const handleMouseEnter = (e) => {
  e.target.style.transform = 'scale(1.1)';
};

const handleMouseLeave = (e) => {
  e.target.style.transform = 'scale(1)';
};

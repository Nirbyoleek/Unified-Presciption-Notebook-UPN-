import React, {useState, useRef} from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import logo1 from "../../assets/logo1.svg"
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
const styles = {
  border: '0.5rem solid #23776E',
  borderRadius: '1rem',
};

const Canvas = () => {
  const [erase,seterase] = useState(false)
  const [prescription,setprescription] = useState("")
  const thiscanvas = useRef();
  const [color, setColor] = useColor("hex", "#121212");

  return (
    <div className='bg-[#E5FFFE]'>
    <img src={logo1} className="p-4"/>
    <div className='h-[100vh] w-[80vw] m-auto mt-4 overflow '>
    <div className='flex'>
    <div className='h-[100vh] w-[80vw] m-2'>
    <ReactSketchCanvas
      style={styles}
      ref={thiscanvas}
      strokeWidth={4}
      strokeColor={color.hex}
    /></div>
    <div className='mt-4'>
    <ColorPicker width={400} height={200} 
                   color={color} 
                   onChange={setColor} />
    <button className='ml-6 bg-[#23776E] rounded-sm p-4 text-white' onClick={()=>{
      erase ? seterase(false) : seterase(true)
     thiscanvas.current.eraseMode(erase)
     console.log(erase)
    }}>Erase</button>

    <button className='ml-6 bg-[#23776E] rounded-sm p-4 text-white' onClick={()=>{
     thiscanvas.current.undo()
    }}>Undo</button>
    
    <button className='ml-6 mt-6 bg-[#23776E] rounded-sm p-4 text-white' onClick={()=>{
     thiscanvas.current.clearCanvas()
    }}>Clear</button>

    <button className='bg-[#23776E] ml-16 rounded-sm my-4 p-4 text-white m-auto' onClick={()=>{thiscanvas.current.
      exportImage("png")
      .then(data => {
        setprescription(data)
      })
      .catch(e => {
        console.log(e);
      })}}>Save Prescription</button>
    </div>
    </div>
    </div>
      </div>
  );
};

export default Canvas;
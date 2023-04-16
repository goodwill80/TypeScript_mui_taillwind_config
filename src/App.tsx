import './App.css';

// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/icons-material
// npm install -D tailwindcss
// npx tailwindcss init -p
// Refer to tailwind.config.js for configurations
// Refer to index.tsx for configuration mui wrapper

// Elements_Components
import MUITypography from './Element_Components/MUITypography';
import MUIButton from './Element_Components/MUIButtons&Icons';
import MUITextField from './Element_Components/MUITextField';

// LayOut_Components
import BoxComponent from './Layout_Components/BoxComponent';
import StackComponent from './Layout_Components/StackComponent';
import GridComponent from './Layout_Components/GridComponent';

function App() {
  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-2xl font-bold">
        Style Material UI with Tailwind CSS & Typescript
      </h1>
      {/* UNCOMMENT FOR SHOW */}
      {/* <MUITypography /> */}
      {/* <MUIButton /> */}
      {/* <MUITextField /> */}
      {/* <BoxComponent /> */}
      {/* <StackComponent /> */}
      <GridComponent />
    </div>
  );
}

export default App;

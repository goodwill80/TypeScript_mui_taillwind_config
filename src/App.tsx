import './App.css';

// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/icons-material
// npm install -D tailwindcss
// npx tailwindcss init -p
// Refer to tailwind.config.js for configurations
// Refer to index.tsx for configuration mui wrapper

import MUITypography from './Components/MUITypography';
import MUIButton from './Components/MUIButtons&Icons';
import MUITextField from './Components/MUITextField';

function App() {
  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-2xl font-bold">
        Style Material UI with Tailwind CSS & Typescript
      </h1>
      {/* UNCOMMENT FOR SHOW */}
      {/* <MUITypography /> */}
      {/* <MUIButton /> */}
      <MUITextField />
    </div>
  );
}

export default App;

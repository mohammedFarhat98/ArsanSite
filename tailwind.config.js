/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html','node_modules/preline/dist/*.js',],
  theme: {
    animation: {
      zoomOutIn01: 'zoomOutIn01 10s linear infinite',
    },


    extend: { 
      keyframes: {
        zoomOutIn01: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.9)' },
        }
      },
   
      
      
      colors: {
     
      primary: {
        100: '#D3E8E1',
        50: '#55BC7E',
      },
      
     
    
   
    
    },
  
    
  },

  
  
    
  },
  plugins: [ require('preline/plugin'),],
}


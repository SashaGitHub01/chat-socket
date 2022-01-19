module.exports = {
   content: [
      "./src/**/*.{js,jsx,ts,tsx}",
   ],
   theme: {
      extend: {
         fontFamily: {
            sans: ['"Fira Sans"', "Segoe UI", "Arial", "sans-serif"]
         },

         colors: {
            grey: 'var(--color-grey)',
            grey_light: 'var(--color-grey-light)',
            purple: 'var(--color-purple)',
            purple_hover: 'var(--color-purple_hover)',
            text_grey: 'var(--text-grey)',
            second: 'var(--text-second)',
            smoke: 'var(--color-smoke)',
            my_msg: 'var(--color-my-msg)'
         },

         fontSize: {
            '14': 'var(--fz-14)',
            '16': 'var(--fz-16)',
            '18': 'var(--fz-18)',
            '20': 'var(--fz-20)',
         },

         boxShadow: {
            sm: 'var(--shadow-sm)',
            purple: 'var(--shadow-purple)',
            purple_blur: 'var(--shadow-purple-blur)',
            avatar: 'var(--shadow-avatar)',
         },

         animation: {
            load: 'load 1s cubic-bezier(0.5, 0, 0.5, 1) infinite',
         },

         keyframes: {
            load: {
               '0%': {
                  transform: 'rotate(0deg)'
               },

               '100%': {
                  transform: 'rotate(360deg)'
               }
            }
         }
      },
   },
   plugins: [],
}

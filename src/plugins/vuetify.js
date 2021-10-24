import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        bgcolor: '#1e1e1e',
        primary: '#c87531',
        secondary: '#ffc66d',
        tertiary: '#9876aa',
        fourth: '#529742',
      },
    },
  },
});

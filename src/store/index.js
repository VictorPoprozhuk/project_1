import { createStore } from 'vuex';
import { modulePosts } from './modulePosts';

export default createStore({
   modules: {
      post: modulePosts
   }

})


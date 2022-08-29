import axios from "axios";



export const modulePosts = {
   state: () => ({
      posts: [],
      isPostsLoading: false,
      searchInput: "",
      selectedSort: "",
      sortReverse: false,
      sortOptions: [
         { value: "title", name: "By name" },
         { value: "body", name: "By body " },
         { value: "id", name: "By id" },
      ],
      page: 1,
      limit: 10,
      totalPages: 0,
   }),
   getters: {
      sortPosts(state) {
         if (state.selectedSort === "id") {
            return [...state.posts].sort((post1, post2) =>
               post1.id > post2.id ? 1 : -1
            );
         } else
            return [...state.posts].sort((post1, post2) =>
               post1[state.selectedSort]?.localeCompare(
                  post2[state.selectedSort]
               )
            );
      },
      inputSearch(state, getters) {
         if (state.sortReverse) {
            const arr = getters.sortPosts.reverse()
            return arr.filter((post) =>
               post.title.toLowerCase().includes(state.searchInput.toLowerCase())
            );
         }

         return getters.sortPosts.filter((post) =>
            post.title.toLowerCase().includes(state.searchInput.toLowerCase())
         );
      },
   },
   mutations: {
      setPosts(state, posts) {
         state.posts = posts
      },
      setIsPostsLoading(state, bool) {
         state.isPostsLoading = bool
      },
      setSearchInput(state, search) {
         state.searchInput = search
      },
      setSelectedSort(state, sort) {
         state.selectedSort = sort
      },
      setPage(state, page) {
         state.page = page
      },
      setTotalPages(state, totalPages) {
         state.totalPages = totalPages
      },
      setSortReverse(state) {
         state.sortReverse = !state.sortReverse

      }


   },
   actions: {
      async fetchPosts({ state, commit }) {
         try {
            commit('setIsPostsLoading', true)
            setTimeout(async () => {
               const response = await axios.get(
                  "https://jsonplaceholder.typicode.com/posts",
                  {
                     params: {
                        _page: state.page,
                        _limit: state.limit,
                     },
                  }
               );
               commit('setTotalPages', Math.ceil(
                  response.headers["x-total-count"] / state.limit
               ))
               commit('setPosts', response.data)
               commit('setIsPostsLoading', false)
            }, 1000);
         } catch (error) {
            alert("Error");
         }
      },
      async loadMorePosts({ state, commit }) {
         //безкінечна підгрузка постів

         try {
            commit('setPage', state.page + 1)

            const response = await axios.get(
               "https://jsonplaceholder.typicode.com/posts",
               {
                  params: {
                     _page: state.page,
                     _limit: state.limit,
                  },
               }
            );

            commit('setTotalPages', Math.ceil(
               response.headers["x-total-count"] / state.limit
            ))

            commit('setPosts', [...state.posts, ...response.data])

         } catch (error) {
            console.log(error);
         }
      },
   },
   namespaced: true
}
import firebase from '@/services/fireinit.js'

export default (context) => {
  const {app, store, redirect, isClient} = context

  // app.router.beforeEach((to, from, next) => {
  //   console.log('each ran');
  //   next()
  // })

  // firebase.auth().onAuthStateChanged(user => {
  //   if (user) {
  //     store.commit('setUser', user)
  //
  //   }
  //   // return resolve();
  // });
  // if (isClient) {
    // return new Promise((resolve, reject) => {
    //   firebase.auth().onAuthStateChanged(user => {
    //     if (user) {
    //       return resolve(store.commit('setUser', user))
    //     }
    //     return resolve();
    //   });
    // })
  // }
}

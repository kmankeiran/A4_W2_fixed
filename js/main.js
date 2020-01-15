// todo => use a key to track the current video, or just pass the video in as a ref to the function and grab its source

var vm = new Vue({
  el: "#app",

  data: {
    // mock up the user - this well eventually come from the database UMS (user management system)
    user: {
      isAdmin: true,
      avatar: null,
      isLoggedIn: true
    },

    // this data would also come from the database, but we'll just mock it up for now
    videodata: [
      { name: "Star Wars The Force Awakens", thumb: "forceawakens.jpg", vidsource: "forceawakens.mp4", description: "yet another star wars movie" },
      { name: "Stranger Things", thumb: "strangerthings.jpg", vidsource: "strangerthings.mp4", description: "don't get lost in the upside down" },
      { name: "Marvel's The Avengers", thumb: "avengers.jpg", vidsource: "avengers.mp4", description: "will they make black widow action figures this time?" }
    ],


    videotitle: "video title goes here",
    vidsource: "",
    videodescription: "video description here",

    showDetails: false
  },

  methods: {
    userLogin() {
      // call the login route, or just mock up the funtionality for now
      console.log('do login on click');

      this.user.isLoggedIn = (this.user.isLoggedIn) ? false : true;
    },

    setUserPreferences() {
      // set the user prefs if user has admin rights
      console.log('set prefs here');
    },

    showMovieDetails({ name, description, vidsource }) {
      // set the observables / bound data so that the view updates
      // console,log('show these details: ', movie);

      this.videotitle = name;
      this.vidsource = vidsource;
      this.videodescription = description;

      this.showDetails = true;
    },

    // scrollBackUp() {
    //   window.scrollTo(0, 0);
    //   this.showDetails = false;
    //   this.videosource = "";
    // }
  }
});
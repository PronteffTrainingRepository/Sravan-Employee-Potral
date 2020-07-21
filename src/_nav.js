export default {
  items: [
    {
      name: "Home",
      url: "/home",
      icon: "icon-home",

      // badge: {
      //   variant: "info",
      //   text: "NEW",
      // },
    },
    {
      name: "Salary Details",
      url: "/salary",
      icon: "icon-credit-card",
    },
    {
      name: "Co-Workers",
      url: "/coworkers",
      icon: "icon-people",
    },
    {
      name: "Feed",
      url: "/feed",
      icon: "icon-feed",
    },
    {
      name: "Form",
      url: "/form",
      icon: "icon-note",
    },
    {
      name: "Loan",
      url: "/loan",
      icon: "icon-credit-card",
    },

    {
      title: true,
      name: "Extras",
    },

    {
      name: "Pages",
      url: "/pages",
      icon: "icon-list",
      children: [
        {
          name: "Login",
          url: "/login",
          icon: "icon-login",
        },
        {
          name: "Register",
          url: "/register",
          icon: "icon-plus",
        },
        {
          name: "Error 404",
          url: "/404",
          icon: "icon-ban",
        },
      ],
    },
  ],
};

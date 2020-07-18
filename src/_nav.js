export default {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "icon-speedometer",
      badge: {
        variant: "info",
        text: "NEW",
      },
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
};

export default {
  items: [
    {
      name: "Home",
      url: "/dashboard",
      icon: "icon-speedometer",
      badge: {
        variant: "info",
        text: "NEW",
      },
    },
    {
      name: "Salary Details",
      url: "/salary",
      icon: "icon-speedometer",
    },
    {
      name: "Investments",
      url: "/invest",
      icon: "icon-speedometer",
    },
    {
      name: "Reimbusements",
      url: "/reimbus",
      icon: "icon-speedometer",
    },
    {
      name: "Form",
      url: "/form",
      icon: "icon-speedometer",
    },
    {
      name: "Loan",
      url: "/loan",
      icon: "icon-speedometer",
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

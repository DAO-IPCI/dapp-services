import Carbonfootprintitaly from "./components/Page";

export default {
  path: "/carbonfootprintitaly",
  component: Carbonfootprintitaly,
  props: true,
  children: [
    {
      path: "",
      name: "carbonfootprintitaly"
    },
    {
      path: ":block/:ext",
      name: "carbonfootprintitaly-view"
    }
  ]
};

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onRenderBody = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const onRenderBody = ({
  setHeadComponents
}, pluginOptions) => {
  const clientId = pluginOptions.clientId;
  setHeadComponents([_react.default.createElement("script", {
    key: "gatsby-plugin-metomic",
    dangerouslySetInnerHTML: {
      __html: `
          !function(p,r,i,v,a,c,y){p.Metomic={apiKey:i};p[i]||(p[i]=function(){
          (p[i].q=p[i].q||[]).push(arguments)});p[i].l=+new Date;c=r.createElement(v);
          y=r.getElementsByTagName(v)[0];p.Metomic.script=c;c.src=a;y.parentNode.insertBefore(c,y)}
          (window,document,'${clientId}','script','https://consent-manager.metomic.io/embed.js');
        `
    }
  })]);
};

exports.onRenderBody = onRenderBody;
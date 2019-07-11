import React from 'react'

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  const { clientId } = pluginOptions

  setHeadComponents([
    <script 
      key="gatsby-plugin-metomic"
      dangerouslySetInnerHTML={{
        __html: `
          !function(p,r,i,v,a,c,y){p.Metomic={apiKey:i};p[i]||(p[i]=function(){
          (p[i].q=p[i].q||[]).push(arguments)});p[i].l=+new Date;c=r.createElement(v);
          y=r.getElementsByTagName(v)[0];p.Metomic.script=c;c.src=a;y.parentNode.insertBefore(c,y)}
          (window,document,'${clientId}','script','https://consent-manager.metomic.io/embed.js');
        `
      }}
    />
  ])
}

import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "KlímaPont Győr - klímaszerelés és tisztítás Győrben",
  description:
    "Klíma telepítés, tisztítás és karbantartás Győrben és 30 km-es körzetben. 24 órán belüli kapcsolatfelvétel, ingyenes felmérés, 5 év garancia.",
  openGraph: {
    title: "KlímaPont Győr - klímaszerelés és tisztítás Győrben",
    description: "Ingyenes felmérés, korrekt árak és garanciás klímaszerelés Győrben és környékén.",
    images: ["/assets/klima-hero-real-hvac.png"],
    locale: "hu_HU",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="hu">
      <body>
        {children}
        <Script id="chatbase-widget" strategy="afterInteractive">
          {`
            (function(){
              if(!window.chatbase||window.chatbase("getState")!=="initialized"){
                window.chatbase=(...arguments)=>{
                  if(!window.chatbase.q){window.chatbase.q=[]}
                  window.chatbase.q.push(arguments)
                };
                window.chatbase=new Proxy(window.chatbase,{
                  get(target,prop){
                    if(prop==="q"){return target.q}
                    return(...args)=>target(prop,...args)
                  }
                })
              }
              const onLoad=function(){
                const script=document.createElement("script");
                script.src="https://www.chatbase.co/embed.min.js";
                script.id="2VOFj4MkraxGbSZvD8oGU";
                script.domain="www.chatbase.co";
                document.body.appendChild(script)
              };
              if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}
            })();
          `}
        </Script>
      </body>
    </html>
  );
}

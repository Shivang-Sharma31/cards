import React from 'react'
import Card from "./components/card"
const App = () => {
  return (
    <div className="parent">
      <div className="cards">
        <Card pace={90} shoot={91} pass={99} dri={100} def={45} phy={81} imag={"https://imgs.search.brave.com/vTH6-y99bAh_y2R1fSBZZDRGiFjQY3bTa9uDTVHEVb0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzEzL01l/c3NpLVBORy1QaWMt/QmFja2dyb3VuZC5w/bmc"} />
        <Card pace={85} shoot={88} pass={92} dri={95} def={40} phy={78} imag={"https://www.fcbarcelona.com/photo-resources/2025/09/09/3dd2346c-01bb-4ad9-9b62-ed5cbf8d8b06/08-Pedri.png?height=790&width=670"} />
        <Card pace={92} shoot={94} pass={90} dri={98} def={50} phy={85} imag={"https://imgs.search.brave.com/8FgStUAg5f_R-ABLFtHJtjz3liknsmi9mtpFNMFlE2A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMi9Dcmlz/dGlhbm8tUm9uYWxk/by1QTkctVHJhbnNw/YXJlbnQtUGljdHVy/ZS5wbmc"} />
        <Card pace={88} shoot={86} pass={91} dri={93} def={60} phy={82} imag={"https://imgs.search.brave.com/NVYmd3_i98NaU6H3Ra-yi2K26K_OgpBns9Qcug7_uB8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jcnlz/dGFscG5nLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNS8w/Mi9QZWxlLXBuZy0w/Mi5wbmc"} />
      </div>
    </div>
  )
}

export default App
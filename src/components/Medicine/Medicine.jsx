import React from "react"
import { Card } from "react-bootstrap"
import { Button } from "react-bootstrap"
import NTcuff from "../../assets/NTcuff.JPG"
import Roaforte from "../../assets/Roaforte.JPG"
import ntzyme from "../../assets/ntzyme.JPG"
import shee from "../../assets/shee.JPG"
import vvgold from "../../assets/vvgold.JPG"
import medam from "../../assets/medam.JPG"
import laxc from "../../assets/laxc.JPG"
import h2liv from "../../assets/h2liv.JPG"
import haempure from "../../assets/haempure.JPG"
import Flowrine from "../../assets/Flowrine.JPG"
import aloefit from "../../assets/aloefit.JPG"
import "./Medicine.css";

const Medicine = () => {
    const cardInfo = [
        {image:NTcuff, title:"nt-cuff", text:""},
        {image:Roaforte, title:"Roa-Forte", text:""},
        {image:ntzyme, title:"ntzyme", text:""},
        {image:shee, title:"SHHE", text:""},
        {image:vvgold, title:"V.V.GOLD", text:""},
        {image:medam, title:"Medam", text:""},
        {image:laxc, title:"Laxc", text:""},
        {image:h2liv, title:"H2-Liv", text:""},
        {image:haempure, title:"Haem-Pure", text:""},
        {image:Flowrine, title:"Flow-rine", text:""},
        {image:aloefit, title:"ALOE-FIT", text:""},
    ]
    const renderCard = (card, index) => {
        return (
<Card style={{ width: '18rem' }} key={index} className="box" >
    <Card.Img variant="top" src={card.image}  />
    <Card.Body>
      <Card.Title>{card.title}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary" onClick={()=>{console.log(card)}} key={index}>View Details</Button>
    </Card.Body>
  </Card> 
        )
    }
    return (
        <div className="grid">
{cardInfo.map(renderCard)}
  </div>
  )
}
export default Medicine;
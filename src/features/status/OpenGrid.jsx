import Call from "../../components/contacts/Call";
import Directions from "../../components/contacts/Directions";
import StaticMap from "../map/components/StaticMap";
import Open from "./Open";

export default function OpenGrid() {
  return (
    <section className='open-grid'>
						<div className='span-2c'><Open /></div>
						<div className='span-2r'><StaticMap /></div>
						<Call/>
						<Directions />
					</section>
  )
}

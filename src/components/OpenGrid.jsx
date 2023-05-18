import StaticMap from "../features/map/components/StaticMap";
import WereOpen from "../features/wereopen/WereOpen";
import Call from "./Call";
import Directions from "./Directions";

export default function OpenGrid() {
  return (
    <div className='open-grid'>
						<div className='span-2c'><WereOpen /></div>
						<div className='span-2r'><StaticMap /></div>
						<Call/>
						<Directions />
					</div>
  )
}

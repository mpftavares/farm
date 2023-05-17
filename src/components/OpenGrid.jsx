import StaticMap from "../features/map/components/StaticMap";
import WereOpen from "../features/wereopen/WereOpen";
import Directions from "./Directions";

export default function OpenGrid() {
  return (
    <div className='open-grid'>
						<WereOpen />
						<div className='span-2r'><StaticMap /></div>
						<Directions />
					</div>
  )
}

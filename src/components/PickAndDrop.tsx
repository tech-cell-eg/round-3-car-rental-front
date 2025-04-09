import { PickAndDropProps } from "../types"

const PickAndDrop : React.FC<PickAndDropProps> = ({title}) => {
  return <>
      <div className="flex items-center gap-2 mb-4">
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
          <h3 className="text-base font-semibold">{title}</h3>
      </div>
  </>
}

export default PickAndDrop
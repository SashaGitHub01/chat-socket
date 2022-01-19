import { Search } from "../../assets/icons"
import MyInput from "../MyInput"
import UserItem from "./UserItem"

const Dialogs = ({ dialogs, isLoading, isSelect }) => {
   return (
      <div className={`${isSelect ? 'max-w-[300px]' : 'flex-auto'} w-full bg-grey overflow-x-hidden
       py-4 px-6 flex flex-col gap-6`}
      >
         <MyInput placeholder='Search' Icon={Search} />
         {dialogs
            ? dialogs.map((item) => <UserItem dialog={item} key={item.id} />)
            : null}
      </div>
   )
}

export default Dialogs

import {Input} from "@nextui-org/react";
import { SearchIcon } from '../../assets/SearchIcon';

const Search = () => {
  return (
    <div className="ml-8">
      <Input
        isClearable
        radius="lg"
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
          ],
          innerWrapper: "bg-transparent",
        }}
        placeholder="Type to search..."
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />
    </div>
  )
}

export default Search
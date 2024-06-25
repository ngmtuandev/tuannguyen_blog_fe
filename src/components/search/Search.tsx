import { Input } from "@nextui-org/react";
import { SearchIcon } from "../../assets/SearchIcon";
import { useRecoilState } from "recoil";
import { modelSearchState } from "../../store/model-search.store";
import ModelSearch from "./ModelSearch";
import { useState, useEffect } from "react";
import { valueSearchState } from "../../store/value-search.store";
import useDebounce from "../../hooks/useDebouce";
import { TIME_DEBOUCE } from "../../utils/constant";

const Search = () => {
  const [modelSearch, setModelSearch] = useRecoilState(modelSearchState);
  const [_, setValueSearch] = useRecoilState(valueSearchState);
  const [value, setValue] = useState("");
  const [isInsideModelSearch, setIsInsideModelSearch] = useState(false);

  const valueDebouce = useDebounce(value, TIME_DEBOUCE.SEARCH_HEADER);

  useEffect(() => {
    setValueSearch(value);
  }, [valueDebouce]);

  useEffect(() => {
    const handleDocumentClick = () => {
      if (!isInsideModelSearch) {
        setModelSearch(false);
      }
    };
    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [isInsideModelSearch]);

  return (
    <div className="ml-8 relative">
      <Input
        isClearable
        radius="lg"
        onFocus={() => {
          setModelSearch(true);
        }}
        onBlur={() => {
          if (!isInsideModelSearch) {
            setModelSearch(false);
          }
        }}
        onChange={(e) => setValue(e.target.value)}
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: ["bg-transparent"],
          innerWrapper: "bg-transparent",
        }}
        placeholder="Type to search..."
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />
      {modelSearch && (
        <ModelSearch setIsInsideModelSearch={setIsInsideModelSearch} />
      )}
    </div>
  );
};

export default Search;
